/*
let p1 = document.getElementById('parrafo1');
alert(p1.innerText); // accedemos solo al texto
alert(p1.innerHTML); // accedemos a toda la estructura del html
p1.innerHTML = '<strong> Lo he cambiado </strong>';
*/

let boton = document.getElementById('boton');
boton.addEventListener('click',botonPulsado);
function botonPulsado(){
    let primerLi= document.querySelectorAll('li:first-child');
    for(let li of primerLi){
        alert(li.innerText);
    }
}

//Para diferenciar clicks
let boton2 = document.getElementById('boton2');
boton2.addEventListener('click',botonPulsado2);
//Para diferenciar clicks
function botonPulsado2(){
    let texto = prompt("Diga el texto del nuevo elemento: ");
    
    // obtengo la lista
    let lista = document.querySelector('ol'); //devuelve el primer elemento del html que tenga ol

    //creo el nuevo elemento
    let nuevoLi = document.createElement('li'); //li indica el tipo de etiqueta que se va a crear

    //le doy contenido
    nuevoLi.innerText = texto; // se puede poner directamente aqui el prompt

    //Añado el li al ol
    lista.append(nuevoLi);
}
//Para diferenciar clicks
let boton3 = document.getElementById('boton3');
boton3.addEventListener('click',botonPulsado3);
//Para diferenciar clicks

function botonPulsado3(){
//Creo un nuevo mensaje tomando como elemento la clase 'zonaMensajes'
let zonaMensajes = document.querySelector('.zonaMensajes');

let numActual = parseInt(zonaMensajes.querySelector('strong').innerText)+1;

zonaMensajes.querySelector('strong').innerText = numActual;
}
//Para diferenciar clicks
let boton4 = document.getElementById('boton4');
boton4.addEventListener('click',botonPulsado4);
//Para diferenciar clicks
function botonPulsado4(){

    // obtengo la lista
    let lista = document.querySelector('ol'); //devuelve el primer elemento del html que tenga ol

    //obtenemos el segundo hijo de la lista
    let segundoLi = lista.querySelector('li:nth-child(2)');

    //Movemos el segundo hijo al final de la lista
    lista.append(segundoLi);
}
//Para diferenciar clicks
let boton5 = document.getElementById('boton5');
boton5.addEventListener('click',botonPulsado5);
//Para diferenciar clicks
function botonPulsado5(){
    boton5.classList.toggle('btn-danger');
    boton5.className += ' text-warning';
    
    let zonaMensajes = document.querySelector('.zonaMensajes');
    zonaMensajes.innerText = 'el boton es del tipo ' + boton5.type;

    let enlace = document.createElement('a');
    enlace.setAttribute('href', '#inicio');
    document.querySelector('body').id='inicio';
    enlace.innerText='Ir al inico'

    zonaMensajes.append(enlace);

    
    
}


