let palabra = prompt("Inserte la palabra: ");
comprobarLetras(palabra);


function comprobarLetras(string) {
    let contador = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toUpperCase()) {
            contador++;
        }
    }

    if (contador === string.length) {
        alert("La palabra solo tiene mayúsculas.");
    } else if (contador === 0) {
        alert("La palabra solo tiene minúsculas.");
    } else {
        alert("La palabra tiene mayúsculas y minúsculas.");
    }
}