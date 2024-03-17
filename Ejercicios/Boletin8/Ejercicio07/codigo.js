let num = prompt("Inserte el número del factorial: ")
let resultado = 1;
for(let i = num; i>0; i--){
    resultado *= i;
}
alert(resultado);