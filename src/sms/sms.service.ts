import { Injectable } from '@nestjs/common';
import { SmsServiceInterface } from './interfaces/sms.interface';

@Injectable()
export class SmsService implements SmsServiceInterface {}
