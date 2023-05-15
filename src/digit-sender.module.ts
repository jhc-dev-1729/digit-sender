import { Module } from '@nestjs/common';
import { DigitSenderService } from './digit-sender.service';
import { DigitSenderConfig} from './type/digit-sender.type';
import { ValueProvider } from '@nestjs/common/interfaces';

@Module({
  providers: [DigitSenderService],
  exports: [DigitSenderService],
})
export class DigitSenderModule {
  static forRoot(digitSenderConfig: DigitSenderConfig){

    const DigitSenderConfigProvider: ValueProvider<DigitSenderConfig> = {
      provide: 'DIGIT_SENDER_CONFIG',
      useValue: digitSenderConfig
    }

    return {
      module: DigitSenderModule,
      providers: [
        DigitSenderConfigProvider
      ]
    }
  }
}