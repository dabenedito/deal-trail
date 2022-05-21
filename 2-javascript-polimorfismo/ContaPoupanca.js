export class ContaPoupanca {
  constructor(saldoInicial, cliente, agencia) {
    this._saldoInicial = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get saldoInicial() {
    return this._saldoInicial;
  }

  set saldoInicial(value) {
    this._saldoInicial = value;
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(value) {
    this._cliente = value;
  }

  get agencia() {
    return this._agencia;
  }

  set agencia(value) {
    this._agencia = value;
  }
}

