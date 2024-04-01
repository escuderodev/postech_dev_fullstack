"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seguranca = void 0;
var Seguranca;
(function (Seguranca) {
    function proteger(prestador) {
        console.log("".concat(prestador, " est\u00E1 protegendo o ambiente."));
    }
    Seguranca.proteger = proteger;
})(Seguranca || (exports.Seguranca = Seguranca = {}));
