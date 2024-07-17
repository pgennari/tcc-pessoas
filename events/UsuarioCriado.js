import { Evento } from Evento;

export class UsuarioCriado extends Evento {
    static nomeEvento = 'usuario-criado'
    constructor (dados) {
        super(UsuarioCriado.nomeEvento, dados)
        Object.defineProperty(UsuarioCriado, 'nomeEvento', {
            writable: false, configurable: false, enumerable: true
        })
    }

    static commit (estado, evento){
        estado.id = evento.dados.id;
        estado.nome = evento.dados.nome;
        estado.email = evento.dados.email;
        estado.criadoEm = evento.momento;
        estado.atualizadoEm = evento.momento;
        return estado;
    }
}