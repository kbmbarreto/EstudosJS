// == (comparação implicita) faz a comparação e faz a conversão implicita antes

const numero = 5;
const texto = "5";

console.log(numero == texto);

// === faz a comparação sem converter, ele é mais específico

console.log(numero === texto);

// == compara só o valor
// === compara o valor e o tipo de dado

// as boas práticas pedem que use o === , utilizando a conversão explícita

Number()
String()