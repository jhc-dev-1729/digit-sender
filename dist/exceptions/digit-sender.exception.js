"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinLengthOverflowException = exports.HostTypeInitialiserException = void 0;
class HostTypeInitialiserException extends Error {
    constructor(statusCode) {
        let msg = '';
        switch (statusCode) {
            case 0:
                msg = "[Error] Invalid hostType. The hostType must be one of ['gmail', 'custom']";
                break;
            case 1:
                msg = "[Error] Doesn't provide enough hostInfo on [custom] hostType.";
                break;
            default:
                msg = "[Error] Doesn't provide enough hostInfo.";
                break;
        }
        super(msg);
        this.statusCode = statusCode;
    }
}
exports.HostTypeInitialiserException = HostTypeInitialiserException;
class PinLengthOverflowException extends Error {
    constructor(length) {
        const msg = `[Error] Unvalid pin length [${length}] provided. Maximum pin length is 16.`;
        super(msg);
        this.length = length;
    }
}
exports.PinLengthOverflowException = PinLengthOverflowException;
