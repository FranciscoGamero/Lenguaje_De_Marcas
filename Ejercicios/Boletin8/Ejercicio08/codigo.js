let num = prompt("Inserte el número: ")
comprobarPar(num);
function comprobarPar(numer){
    if(numer%2==0){
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}