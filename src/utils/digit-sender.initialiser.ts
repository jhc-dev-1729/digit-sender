import { HostTypeInitialiserException } from "../exceptions/digit-sender.exception";
import { EmailAuth, HostInfo, DigitSenderTransport } from "../type/digit-sender.type";

function initialiseMailTransportOption(hostType: string, auth: EmailAuth, hostInfo?: HostInfo): DigitSenderTransport | undefined{

    switch (hostType) {
        case "gmail":
            return {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth:{
                    user: auth.user,
                    pass: auth.pass
                }
            }
        case "custom":
            if(hostInfo){
                return {
                    host: hostInfo.host,
                    port: hostInfo.port,
                    secure: hostInfo.secure,
                    auth:{
                        user: auth.user,
                        pass: auth.pass
                    }
                }
            } else{
                throw new HostTypeInitialiserException(1);
            }
        default:
            throw new HostTypeInitialiserException(0);
    }

}


export {initialiseMailTransportOption}