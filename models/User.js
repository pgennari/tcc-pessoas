import { UsuarioCriado } from "../events/UsuarioCriado";
import { UsuarioAtualizado } from "../events/UsuarioAtualizado";
import { UsuarioExcluido } from "../events/UsuarioExcluido";

export class Usuario {
  id = null;
  nome = null;
  email = null;
  criadoEm = null;
  atualizadoEm = null;
  excluidoEm = null;

  static collection = "usuarios";

  #persistedEventos = [];
  #pendingEventos = [];

  constructor(persistedEvents = []) {
    if (persistedEventos.length > 0) {
      this.#persistedEventos = persistedEvents;
      this.#upateInternalState();
    }
  }

  get state(){
    const currentState = this.eventos.reduce((new User))
  }

  get events(){
    return [
        ... this.#persistedEventos,
        ... this.#pendingEventos
    ]
  }
}
