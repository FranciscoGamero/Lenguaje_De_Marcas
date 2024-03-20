let resultado = true;
let frase = prompt("Inserte la frase: ");
comprobarPalindromo(frase);

function comprobarPalindromo(str){
    str = str.split(" ").join("").toLowerCase();
    let strInverso = str.split("").reverse().join("");
    if(str==strInverso){
        alert("La palabra es palindroma");
    } else {
        alert("La palabra no es palindroma");
    }
}