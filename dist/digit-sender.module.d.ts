import { DigitSenderConfig } from './type/digit-sender.type';
import { ValueProvider } from '@nestjs/common/interfaces';
export declare class DigitSenderModule {
    static forRoot(digitSenderConfig: DigitSenderConfig): {
        module: typeof DigitSenderModule;
        providers: ValueProvider<DigitSenderConfig>[];
    };
}
