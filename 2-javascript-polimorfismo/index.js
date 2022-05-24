import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente = new Gerente("Diogo", 12345678900, 10000);
gerente.cadastrarSenha("98765432");
const gerenteIsLogged = SistemaAutenticacao.login(gerente, "98765432");

const diretor = new Diretor("Rodrigo", 98765432100, 5000);
diretor.cadastrarSenha("12345678");
const diretorIsLogged = SistemaAutenticacao.login(diretor, "12345678");

const cliente = new Cliente("Lais", 78912345600, "45678912");
const clienteIsLogged = SistemaAutenticacao.login(cliente, "45678912");

console.log(gerenteIsLogged, diretorIsLogged, clienteIsLogged);