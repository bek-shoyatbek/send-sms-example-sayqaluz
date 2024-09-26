import { Body, Controller, Post } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SendSmsParams } from './interfaces/send-sms.interface';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @Post('send')
  async sendSms(@Body() sendSmsParams: SendSmsParams) {
    return await this.smsService.sendSms(sendSmsParams);
  }
}
