"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService_1 = require("./EmailService");
var UserService_1 = require("./UserService");
console.log('\n=== registro de usuário com envio de email ===');
var emailService = new EmailService_1.default();
var userService = new UserService_1.default(emailService);
var user = { nome: 'escuderodev' };
userService.userRegistration(user);
