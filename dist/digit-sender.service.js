"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitSenderService = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const digit_sender_generator_1 = require("./utils/digit-sender.generator");
const digit_sender_const_1 = require("./type/digit-sender.const");
const nodemailer = __importStar(require("nodemailer"));
const digit_sender_initialiser_1 = require("./utils/digit-sender.initialiser");
const path_1 = __importDefault(require("path"));
let DigitSenderService = class DigitSenderService {
    constructor(option) {
        this.option = option;
    }
    sendPin(sendMail, pinHandler, successHandler, errorHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            const pin = (0, digit_sender_generator_1.generatePin)(sendMail.pinSize);
            yield pinHandler(pin);
            /** Build a transporter for sending mail */
            const transportOption = (0, digit_sender_initialiser_1.initialiseMailTransportOption)(this.option.hostType, this.option.auth, this.option.hostInfo);
            const transporter = nodemailer.createTransport(transportOption);
            /** Rendering Handlebar */
            const addr = path_1.default.join(__dirname, digit_sender_const_1.TEMPLATE_ADDRESS, 'pin.hbs');
            const context = {
                pin: pin,
                wordmark: sendMail.wordmark,
                contactMail: sendMail.contactMail
            };
            const templateHtml = (0, digit_sender_generator_1.renderHandlebar)(addr, context);
            try {
                const result = yield transporter.sendMail({
                    from: sendMail.from,
                    to: sendMail.to,
                    subject: sendMail.subject,
                    html: templateHtml
                });
                if (successHandler) {
                    yield successHandler(result);
                }
            }
            catch (error) {
                if (errorHandler) {
                    yield errorHandler(error);
                }
            }
        });
    }
};
DigitSenderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, decorators_1.Inject)(digit_sender_const_1.DIGIT_SENDER_CONFIG))
], DigitSenderService);
exports.DigitSenderService = DigitSenderService;
