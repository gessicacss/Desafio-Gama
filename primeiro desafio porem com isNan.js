const qnt = prompt('Digite quantos números deseja calcular', 'quantidade')
let total = 0;


 for ( let i = 0; i < qnt; i++){
  total += Number(prompt(`Digite o ${i+1} numero`, ''));
 }

 if (isNaN(qnt)){
    alert(`Por favor, digite somente números`)
} else {
    console.log(`A média é ${total/qnt}`)

    alert(`A média é ${total/qnt}`)

}