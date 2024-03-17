let palabra = prompt("Inserte la palabra: ");
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
    if(palabra.charAt(i) === palabra.charAt(i).toUpperCase()) {
        contador++;
    }
}

if (contador === palabra.length) {
    alert("La palabra solo tiene mayúsculas.");
} else if (contador === 0) {
    alert("La palabra solo tiene minúsculas.");
} else {
    alert("La palabra tiene mayúsculas y minúsculas.");
}