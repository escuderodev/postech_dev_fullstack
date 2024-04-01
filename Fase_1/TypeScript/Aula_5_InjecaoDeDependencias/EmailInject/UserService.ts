import EmailService from "./EmailService";

export default class UserService {
    private emailService: EmailService;

    constructor(emailService: EmailService) {
        this.emailService = emailService;
    }


    userRegistration(usuario: {nome: string}) {
        console.log(`Registrando o usuário ${usuario.nome}`);
        this.emailService.sendEmail(`${usuario.nome}, seja bem vindo ao nosso serviço!`);
    }
}