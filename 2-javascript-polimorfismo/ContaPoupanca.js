import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  static quantidadeSaques = 0;

  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
    let taxa = ContaPoupanca.quantidadeSaques < 2 ? 1 : 1.5;

    if(this._saldo >= valor * taxa) {
      this._saldo -= valor * taxa;
      ContaPoupanca.quantidadeSaques++;
      console.log("ContaPoupanca.quantidadeSaques: ", ContaPoupanca.quantidadeSaques)
      return valor;
    }
  }
}

