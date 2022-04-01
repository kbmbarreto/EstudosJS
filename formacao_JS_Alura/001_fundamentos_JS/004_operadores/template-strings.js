const nome = "Klebão";
const idade = 2021-1992;
const cidadeDeNascimento = "São Paulo";

//Modo comum
const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//Template string
const apresentacaoTs = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)
console.log(apresentacaoTs)