import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  static agencia = 1000;

  constructor(cliente) {
    super(0, cliente, ContaCorrente.agencia++);
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if(this._saldo >= valor * 1.1) {
      this._saldo -= valor * 1.1;
      return valor;
    }
  }
}
