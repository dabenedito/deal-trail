export class Funcionario {
  constructor(nome, cpf, salario) {
    if(this.constructor === Funcionario) {
      throw new Error("Você não deve instanciar uma classe abstrata.");
    }

    this._nome = nome;
    this._cpf = cpf;
    this._salario = salario;

    this._bonificacao = 1;
    this._senha = undefined;
  }

  /** Getters and Setters */
  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(value) {
    this._cpf = value;
  }

  get salario() {
    return this._salario;
  }

  set salario(value) {
    this._salario = value;
  }

  get senha() {
    return this._senha;
  }

  /** Methods */
  cadastrarSenha(senha) {
    if(senha.length < 8) {
      throw new Error("A senha deve ter pelo menos 8 dígitos.");
    }

    this._senha = senha;
  }

  autenticar(senha) {
    return senha === this._senha;
  }
}