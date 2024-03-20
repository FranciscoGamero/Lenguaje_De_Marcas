//EJERCICIO 1
function cambiarOrden(array){
    let desde = 0;
    let hasta = array.length;
    let lugar1 = Math.floor(desde+Math.random()*hasta);
    let lugar2= Math.floor(desde+Math.random()*hasta);
    let aux = array[lugar1];
    array[lugar1] = array[lugar2];
    array[lugar2] = aux;
    return array;
}
//EJERCICIO 2
    function trocearURL(url) {
        let sinProtocolo = url.split('://')[1];
        let trozos = sinProtocolo.split('/');
        let resultado = [];
        for (let i = 0; i < trozos.length; i++) {
            let subTrozos = trozos[i].split('.');
            for (let j = 0; j < subTrozos.length; j++) {
                if (subTrozos[j] !== '') {
                    resultado.push(subTrozos[j]);
                }
            }
        }
        return resultado;
    }
alert(cambiarOrden(trocearURL('https://triana.salesianos.edu/colegio/fp/dam.html')));
