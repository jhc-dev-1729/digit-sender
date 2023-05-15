class HostTypeInitialiserException extends Error{

    constructor(readonly statusCode?:number){

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
    }

}

class PinLengthOverflowException extends Error{

    constructor(readonly length: number){
        const msg: string = `[Error] Unvalid pin length [${length}] provided. Maximum pin length is 16.`
        super(msg);
    }

}

export {HostTypeInitialiserException, PinLengthOverflowException}