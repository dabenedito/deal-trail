import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
let valorSacado = contaSalario.sacar(10);

console.log(contaSalario, valorSacado);