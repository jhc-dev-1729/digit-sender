"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DigitSenderModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitSenderModule = void 0;
const common_1 = require("@nestjs/common");
const digit_sender_service_1 = require("./digit-sender.service");
let DigitSenderModule = DigitSenderModule_1 = class DigitSenderModule {
    static forRoot(digitSenderConfig) {
        const DigitSenderConfigProvider = {
            provide: 'DIGIT_SENDER_CONFIG',
            useValue: digitSenderConfig
        };
        return {
            module: DigitSenderModule_1,
            providers: [
                DigitSenderConfigProvider
            ]
        };
    }
};
DigitSenderModule = DigitSenderModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [digit_sender_service_1.DigitSenderService],
        exports: [digit_sender_service_1.DigitSenderService],
    })
], DigitSenderModule);
exports.DigitSenderModule = DigitSenderModule;
