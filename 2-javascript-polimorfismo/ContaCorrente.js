import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if(this._saldo >= valor * 1.1) {
      this._saldo -= valor * 1.1;
      return valor;
    }
  }
}
