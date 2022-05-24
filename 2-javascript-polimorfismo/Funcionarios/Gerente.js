import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
  constructor(nome, cpf, salario) {
    super(nome, cpf, salario);
    this._bonificacao = 1.1;
  }


  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }

  get salario() {
    return this._salario;
  }

  set salario(value) {
    this._salario = value;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(value) {
    this._cpf = value;
  }
}