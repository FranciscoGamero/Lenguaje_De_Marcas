let cantNumeros = prompt('¿Cuantos números desea que tenga su array?')
let array = [cantNumeros];
for (let i = 0; i < cantNumeros; i++) {
    array.push(Math.floor(Math.random() * 100));
}
ordenarArray(array);
function ordenarArray(arr){
    array.sort(function(a, b) {
            return b - a;
        });
    alert(array);
}