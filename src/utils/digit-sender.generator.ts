import fs from 'fs';
import { PinLengthOverflowException } from '../exceptions/digit-sender.exception';

function generatePin(size: number): string {

    if(size > 16){
        throw new PinLengthOverflowException(size);
    }

    const random = Math.random()
    return random.toString().substring(2, 2 + size)
}

function renderHandlebar(addr: string, context: object): string {
    const source:string = fs.readFileSync(addr, 'utf8');
    const template = Handlebars.compile(source);
    return template(context);
}

export {generatePin, renderHandlebar}