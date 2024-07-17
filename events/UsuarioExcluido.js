import { Evento } from Evento;

export class UsuarioExcluido extends Evento {
    static nomeEvento = 'usuario-excluido'
    constructor () {
        super(UsuarioExcluido.nomeEvento, {})
        Object.defineProperty(UsuarioExcluido, 'nomeEvento', {
            writable: false, configurable: false, enumerable: true
        })
    }

    static commit (estado, evento){
        estado.excluidoEm = evento.momento;
        estado.atualizadoEm = evento.momento;
        return estado;
    }
}