import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroContas = 0;
  _cliente;
  agencia;
  _saldo = 0;
  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields

  /**
   * Construtor da classe ContaCorrente
   * @param cliente
   * @param agencia
   * @author Diogo Andrade <diogoa.benedito@outlook.com>
   */
  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroContas += 1;
  }

  /** Getters and setters */
  set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
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
