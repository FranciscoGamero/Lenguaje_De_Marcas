//cada vez que cambie algún texto, se pase a mayuscula menos la contraseña
let formulario = document.forms.registro;
for(let campo of formulario.elements){
    if(campo.type==='text'){
        campo.addEventListener('input', pasarMayuscula)
    }else if(campo.type==='password'){
        campo.nextElementSibling.addEventListener('pointerover', verContrasenia);
        campo.nextElementSibling.addEventListener('pointerout', esconderContrasenia);
    }
}
function pasarMayuscula(elEvento){
    this.value = this.value.toUpperCase();
}

function verContrasenia(elEvento){
    this.previousElementSibling.type='text';
}
function esconderContrasenia(elEvento){
    this.previousElementSibling.type='password';
}

function validarFormulario(elEvento){
    let resultado = true;
    if(formulario.elements.nombre.value==''){
        resultado = false;
    }
    if(formulario.elements.apellido.value==''){
        resultado = false;
    }
    if(!formulario.elements.genero.checked){
        resultado = false;
    }
    if(resultado){
        formulario.submit();
    }
}