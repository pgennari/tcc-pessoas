export class Evento {
    constructor (nome, dados, id = null){
        Object.defineProperties(this, {
            id: {
                writable: false,
                configurable: false,
                enumerable: true,
                value: id || Date.now().toString(16)
            },
            nome: {
                writable: false,
                configurable: false,
                enumerable: true,
                value: nome
            },
            momento: {
                writable: false,
                configurable: false,
                enumerable: true,
                value: new Date()
            },
            dados: {
                writable: false,
                configurable: false,
                enumerable: true,
                value: dados
            }
        })
    }
}