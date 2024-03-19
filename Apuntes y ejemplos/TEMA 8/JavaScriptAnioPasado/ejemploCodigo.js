principal();
/*1. Hacer una funcion que tenga un array dinámico que pide nombres sin parar hasta que el usuario introduzca un número*/

function pedirNombres(){
    let resultado = new Array();
    let texto = prompt("Introduzca un texto");


    while(isNaN(texto)){
        resultado.push(texto);
        texto = prompt("Introduzca un texto")
    }
    return resultado;
}
/*2.Un metodo camelize(String) que pasa palabras con guiones (border-left-radius) a palabras con CamelCase (borderLeftRadius)*/

function camelize(str){
    //Primero quitamos los guiones y separamos por palabras
    let palabrasSueltas = str.split('-')
    //Poner la primera letra a mayuscula
    for (let i=1; i<palabrasSueltas.lenght; i++) {
       let palabraMayuscula=palabrasSueltas[i].charAt(0).toUpperCase();
        palabrasSueltas[i]=palabraMayuscula+palabrasSueltas[i].substring(1);
    }
    //Concatenar las palabras
    return palabrasSueltas.join('');
}

/*3. Un método sortear(arr) que recibe un array y muestra un elemento del array aleatorio*/
function sortear(arr){
    let desde = 0;
    let hasta = arr.lenght;
    let numAleatorio;
    numAleatorio= Math.floor(desde+Math.random()*hasta);
    return arr[numAleatorio];
}

/*4. hacer una funcion principal que llame el método para el ejercicio1, que pase todos los textos a camelCase y despues elija uno al azar */
function principal(){
    let propiedadesCSS = pedirNombres();


    for(let i=0;i<propiedadesCSS.length;i++){
        propiedadesCSS[i] = camelize(propiedadesCSS[i]);
    }


    alert("El escogido es "+sortear(propiedadesCSS));


}