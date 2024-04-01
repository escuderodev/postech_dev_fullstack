"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (message) {
        console.log("Enviando e-mail: => ".concat(message));
    };
    return EmailService;
}());
exports.default = EmailService;
