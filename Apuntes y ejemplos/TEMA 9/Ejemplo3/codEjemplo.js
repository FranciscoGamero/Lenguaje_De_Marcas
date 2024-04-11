/*let campoNombre = document.getElementById('nombre');
campoNombre.addEventListener('input',eventoInputNombre);*/
let formulario = document.querySelector('form');
formulario.addEventListener('input',eventoInputNombre)

function eventoInputNombre(evento){
    evento.target.value = evento.target.value.toUpperCase();
}