export class Cliente {
  nome;
  _cpf;

  /**
   * Construtor da classe Cliente
   * @param nome
   * @param cpf
   * @author Diogo Andrade <diogoa.benedito@outlook.com>
   */
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }

  /**
   * Getter
   * @returns {*}
   */
  get cpf() {
    return this._cpf;
  }
}