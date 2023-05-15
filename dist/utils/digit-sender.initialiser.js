"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialiseMailTransportOption = void 0;
const digit_sender_exception_1 = require("../exceptions/digit-sender.exception");
function initialiseMailTransportOption(hostType, auth, hostInfo) {
    switch (hostType) {
        case "gmail":
            return {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: auth.user,
                    pass: auth.pass
                }
            };
        case "custom":
            if (hostInfo) {
                return {
                    host: hostInfo.host,
                    port: hostInfo.port,
                    secure: hostInfo.secure,
                    auth: {
                        user: auth.user,
                        pass: auth.pass
                    }
                };
            }
            else {
                throw new digit_sender_exception_1.HostTypeInitialiserException(1);
            }
        default:
            throw new digit_sender_exception_1.HostTypeInitialiserException(0);
    }
}
exports.initialiseMailTransportOption = initialiseMailTransportOption;
