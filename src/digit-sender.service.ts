import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { DigitSenderConfig, DigitSenderMailInfo } from './type/digit-sender.type';
import { generatePin, renderHandlebar } from './utils/digit-sender.generator';
import { DIGIT_SENDER_CONFIG, TEMPLATE_ADDRESS } from './type/digit-sender.const';
import * as nodemailer from "nodemailer";
import { initialiseMailTransportOption } from './utils/digit-sender.initialiser';
import path from "path";
import fs from "fs";
import Handlebars from 'handlebars';

@Injectable()
export class DigitSenderService {

    constructor(
        @Inject(DIGIT_SENDER_CONFIG) private readonly option: DigitSenderConfig
    ){}

    async sendPin(sendMail: DigitSenderMailInfo, pinHandler: Function, successHandler?: Function, errorHandler?: Function){

        const pin = generatePin(sendMail.pinSize);
        await pinHandler(pin);

        /** Build a transporter for sending mail */
        const transportOption = initialiseMailTransportOption(this.option.hostType, this.option.auth, this.option.hostInfo);
        const transporter = nodemailer.createTransport(transportOption);

        /** Rendering Handlebar */
        const addr = path.join(__dirname, TEMPLATE_ADDRESS, 'pin.hbs');
        const context = {
            pin: pin,
            wordmark: sendMail.wordmark,
            contactMail: sendMail.contactMail
        };
        const templateHtml = renderHandlebar(addr, context);

        try {
            const result = await transporter.sendMail({
                from: sendMail.from,
                to: sendMail.to,
                subject: sendMail.subject,
                html: templateHtml
            });

            if(successHandler){
                await successHandler(result);
            }

        } catch (error) {
            if(errorHandler){
                await errorHandler(error)
            }
        }
    }
}
