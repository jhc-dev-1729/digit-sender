"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHandlebar = exports.generatePin = void 0;
const fs_1 = __importDefault(require("fs"));
const digit_sender_exception_1 = require("../exceptions/digit-sender.exception");
function generatePin(size) {
    if (size > 16) {
        throw new digit_sender_exception_1.PinLengthOverflowException(size);
    }
    const random = Math.random();
    return random.toString().substring(2, 2 + size);
}
exports.generatePin = generatePin;
function renderHandlebar(addr, context) {
    const source = fs_1.default.readFileSync(addr, 'utf8');
    const template = Handlebars.compile(source);
    return template(context);
}
exports.renderHandlebar = renderHandlebar;
