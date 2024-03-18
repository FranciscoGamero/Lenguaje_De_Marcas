let array = leerArrayPorTeclado();
alert("El array tiene "+array.length+" elementos y es "+array);
function leerArrayPorTeclado(){
    let dato
    let arrayAux = new Array();
    while(dato!==''){
        dato = prompt("Diga algo para guardar en el array");
        if(dato!==''){
        arrayAux.push(dato);
        }
    }
    return arrayAux
}