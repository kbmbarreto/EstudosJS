//boolean
const usuarioLogado = true;
const contapaga = false;

//truthy ou falsy
// 0 => false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

//null => vazio
//undefined => quando nao é definido o tipo da variável

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

console.log(typeof minhaVar);
console.log(typeof varNull); //bug do JS -> ele ve como object e não como null