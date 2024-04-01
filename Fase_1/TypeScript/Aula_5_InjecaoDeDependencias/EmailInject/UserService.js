"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService(emailService) {
        this.emailService = emailService;
    }
    UserService.prototype.userRegistration = function (usuario) {
        console.log("Registrando o usu\u00E1rio ".concat(usuario.nome));
        this.emailService.sendEmail("".concat(usuario.nome, ", seja bem vindo ao nosso servi\u00E7o!"));
    };
    return UserService;
}());
exports.default = UserService;
