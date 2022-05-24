export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if(this.isAuthenticable(autenticavel)) {
      return autenticavel.autenticar(senha);
    }

    return false;
  }

  static isAuthenticable(autentivavel) {
    return "autenticar" in autentivavel && 
      autentivavel.autenticar instanceof Function;
  }
}