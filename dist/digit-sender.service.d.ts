import { DigitSenderConfig, DigitSenderMailInfo } from './type/digit-sender.type';
export declare class DigitSenderService {
    private readonly option;
    constructor(option: DigitSenderConfig);
    sendPin(sendMail: DigitSenderMailInfo, pinHandler: Function, successHandler?: Function, errorHandler?: Function): Promise<void>;
}
