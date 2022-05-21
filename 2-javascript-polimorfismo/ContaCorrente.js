import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  #cliente;

  /**
   * Método construtor de ContaCorrente
   * @param agencia
   * @param cliente
   */
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    this.saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }

  /** Getters and Setters */
  set cliente(cliente) {
    if(cliente instanceof Cliente)
      this._cliente = cliente;
  }

  get cliente() {
    return this._cliente;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  get saldo() {
    return this._saldo;
  }

  /** Methods */
  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
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
