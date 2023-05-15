import { EmailAuth, HostInfo, DigitSenderTransport } from "../type/digit-sender.type";
declare function initialiseMailTransportOption(hostType: string, auth: EmailAuth, hostInfo?: HostInfo): DigitSenderTransport | undefined;
export { initialiseMailTransportOption };
