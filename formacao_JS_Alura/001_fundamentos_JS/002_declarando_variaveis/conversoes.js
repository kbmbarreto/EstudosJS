//tipo de dado
//booleanos

//conversão implicita
const numero = 456;
const numeroString = "456"; // ou const numeroString = Number("456"); no caso da explicita

console.log(numero === numeroString)
console.log(numero == numeroString)

//Number()
//String()
console.log(numero + numeroString)

//conversão explícita

console.log(numero + Number(numeroString))