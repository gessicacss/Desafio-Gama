function triangulo (){
const parametro = prompt(`Coloque um parâmetro pro triângulo`, '');
let asterisco = '';

for (var i = 1; i <= parametro; i++){
 asterisco += '*'
 console.log(asterisco)
}
}

triangulo();