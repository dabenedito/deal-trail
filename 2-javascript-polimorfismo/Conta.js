import { Cliente } from "./Cliente.js";

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this.saldo = saldoInicial;
    this.cliente = cliente;
    this.agencia = agencia;
  }

  /** Getters and Setters */
  get saldoInicial() {
    return this._saldo;
  }

  set saldo(value) {
    this._saldo = value >= 0 ? value : 0;
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(cliente) {
    if(cliente instanceof Cliente) {
      this._cliente = cliente;
    }
  }

  get agencia() {
    return this._agencia;
  }

  set agencia(value) {
    this._agencia = value;
  }

  /** Methods */
  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }

    return 0;
  }

  depositar(valor) {
    if(valor <= 0) {
      return;
    }

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}