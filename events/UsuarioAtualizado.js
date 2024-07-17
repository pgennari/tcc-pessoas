import { Evento } from Evento;

export class UsuarioAtualizado extends Evento {
    static nomeEvento = 'usuario-atualizado'
    constructor (dados) {
        super(UsuarioAtualizado.nomeEvento, dados)
        Object.defineProperty(UsuarioAtualizado, 'nomeEvento', {
            writable: false, configurable: false, enumerable: true
        })
    }

    static commit (estado, evento){
        estado.nome = evento.dados.nome ?? estado.nome;
        estado.email = evento.dados.email ?? estado.email;
        estado.atualizadoEm = evento.momento;
        return estado;
    }
}