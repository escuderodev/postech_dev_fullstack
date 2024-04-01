import EmailService from "./EmailService";
import UserService from "./UserService";


console.log('\n=== registro de usuário com envio de email ===');

const emailService = new EmailService();
const userService = new UserService(emailService);
const user = {nome: 'escuderodev'};

userService.userRegistration(user);
