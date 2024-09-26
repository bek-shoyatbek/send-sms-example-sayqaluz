import { Injectable } from '@nestjs/common';
import { SmsServiceInterface } from './interfaces/sms.interface';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { SendSmsErrorResponse, SendSmsParams, SendSmsResponse } from './interfaces/send-sms.interface';
import { firstValueFrom } from 'rxjs';
import { SmsStatusErrorResponse, SmsStatusParams, SmsStatusResponse } from './interfaces/sms-status.interface';
import { getUnixTimeInSeconds } from 'src/helpers/get-unit-time-in-seconds';
import { generateMd5Hash } from 'src/helpers/generate-md5';

@Injectable()
export class SmsService implements SmsServiceInterface {
    private clientUsername: string;
    private sayqalSmsSendURL: string;
    private clientSecret: string;

    constructor(private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {
        this.clientUsername = this.configService.get<string>('SAYQAL_CLIENT_USERNAME');
        this.sayqalSmsSendURL = this.configService.get<string>('SAYQAL_SMS_SEND_URL');
        this.clientSecret = this.configService.get<string>('SAYQAL_CLIENT_SECRET');
    }

    async sendSms(sendSmsParams: SendSmsParams): Promise<SendSmsResponse | SendSmsErrorResponse> {
        try {
            const randomSmsId = Math.floor(10000 + Math.random() * 90000);

            const smsMessage = {
                ...sendSmsParams,
                smsid: randomSmsId,
            };

            const headers = this.getRequestHeaders();

            const request = this.httpService.post(this.sayqalSmsSendURL + '/TransmitSMS', {
                message: smsMessage,
                utime: getUnixTimeInSeconds(),
                service: {
                    service: 1, // 1 - OTP ga ruhsat berish
                },
                username: this.clientUsername
            },
                { headers: headers }
            );

            const response = await firstValueFrom(request);

            if (response.data?.error) {
                throw new Error(response.data?.error);
            }

            return response.data;
        } catch (err) {
            console.error("SmsService.sendSms: ", err);
            throw new Error();
        }
    }

    async getSmsStatus(params: SmsStatusParams): Promise<SmsStatusResponse | SmsStatusErrorResponse> {
        throw new Error('Method not implemented.');
    }



    private getRequestHeaders() {
        const accessToken = generateMd5Hash(`TransmitSMS ${this.clientUsername} ${this.clientSecret} ${getUnixTimeInSeconds()}`);

        const headers = {
            'Content-Type': 'application/json',
            'X-Access-Token': accessToken
        }

        return headers;
    }

}
