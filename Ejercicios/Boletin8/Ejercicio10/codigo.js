let frase = prompt("Inserte la frase: ");
let resultado = true;
    frase = frase.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < frase.length / 2; i++) {
        if (frase[i] !== frase[frase.length - 1 - i]) {
            resultado = false;
        }
    }

    if(resultado){
        alert("La palabra es palindroma");
    } else {
        alert("La palabra no es palindroma");
    }