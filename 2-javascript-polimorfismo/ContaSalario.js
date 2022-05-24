import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  static agencia = 1020;

  constructor(cliente) {
    super(0, cliente, ContaSalario.agencia++);
  }

  /** Methods */
  sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}