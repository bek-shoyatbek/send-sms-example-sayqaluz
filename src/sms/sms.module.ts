import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5
  })],
  controllers: [SmsController],
  providers: [SmsService, ConfigService],
})
export class SmsModule { }
