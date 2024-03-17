function obtenerNumeroPositivo() {
    let numero = parseFloat(prompt("Introduce un número positivo (o negativo para salir):"));
    if (isNaN(numero) || numero <= 0) {
        return null;
    }
    return numero;
}

let tamanoArray = parseInt(prompt("Introduce el tamaño del array:"));
if (isNaN(tamanoArray) || tamanoArray <= 0) {
    alert("El tamaño del array debe ser un número positivo.");
} else {
    let array = [];
    let suma = 0;

    // Llenar el array con los números proporcionados por el usuario
    for (let i = 0; i < tamanoArray; i++) {
        let numero = obtenerNumeroPositivo();
        if (numero === null) {
            alert("Has introducido un número negativo, saliendo del programa...");
            break;
        }
        array.push(numero);
        suma += numero;
    }

    // Mostrar el array y la suma de sus elementos
    alert("Array: " + array.join(", "));
    alert("Suma de elementos del array: " + suma);

    // Continuar pidiendo números, actualizando el array y la suma
    while (true) {
        let nuevoNumero = obtenerNumeroPositivo();
        if (nuevoNumero === null) {
            alert("Has introducido algo que no es un número positivo. Saliendo del programa...");
            break; // Salir del bucle si el usuario introduce algo que no es un número positivo
        }

        // Eliminar el primer elemento del array y añadir el nuevo número al final
        let primerElemento = array.shift();
        suma -= primerElemento;
        array.push(nuevoNumero);
        suma += nuevoNumero;

        // Mostrar el nuevo array y la suma de sus elementos
        alert("Array: " + array.join(", "));
        alert("Suma de elementos del array: " + suma);
    }
}