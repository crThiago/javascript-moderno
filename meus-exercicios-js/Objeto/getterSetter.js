const sequencia = {
    _valor: 1, // convenciona como (privada)
    get valor() {return this._valor++},
    set valor(valor) { 
        if (valor > this._valor){
            this._valor = valor        
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // ignora devido a condição da função set

console.log(sequencia.valor, sequencia.valor)