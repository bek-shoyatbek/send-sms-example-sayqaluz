import { SendSmsErrorResponse, SendSmsParams, SendSmsResponse } from "./send-sms.interface";
import { SmsStatusErrorResponse, SmsStatusParams, SmsStatusResponse } from "./sms-status.interface";


export interface SmsServiceInterface {
    sendSms(
        params: SendSmsParams,
    ): Promise<SendSmsResponse | SendSmsErrorResponse>;
    getSmsStatus(
        params: SmsStatusParams,
    ): Promise<SmsStatusResponse | SmsStatusErrorResponse>;
}