let numDNI = prompt("Inserte su número de DNI: ")
let letraDNI = prompt("Inserte su letra del DNI: ")
let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D','X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
if(numDNI<0 || numDNI>99999999){
    alert("El número introducido no es válido");
} else {
    if(letrasDNI[numDNI%23].toLocaleUpperCase()==letraDNI.toLocaleUpperCase()){
        alert("Su DNI es correcto");
    } else {
        alert("Su DNI no es correcto");
    }
}