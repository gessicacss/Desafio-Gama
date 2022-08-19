function validar(){
    const numero = Number(prompt(`Insira o número desejado:`, ''))
    
    if(numero % 2 === 0){
        console.log("Esse número é par.");
    }  else {
        console.log("Esse número é impar.");
    }
}

validar();