let laborables = ['lunes','martes','miercoles','jueves','viernes'];
let finde = ['sabado', 'domingo'];

let semana = laborables.concat(finde);

//let semana = laborables.join('#');
/*alert('En semana: '+semana);
alert('En laborables: '+laborables)
alert('En finde: '+finde)
*/
let ultimodDia = semana.pop(); //quitas el ultimo dia
semana.unshift(ultimodDia); //lo pones al principio
alert('La semana inglesa es: '+semana)
alert(semana.reverse()) //Pone el array al reves


//Se pueden añadir mas de 1 cosa a partir del elemento donde se posiciona y lo que realiza, 
//es decir se podría poner del tiron 'no se va a clase' y 'si se va a clase'
semana.splice(2,1,"No se va a clase"); //elimina la posicion 2 (por el segundo 1) y añade no se va a clase
semana.splice(0,0,"Si hay que ir a clase") //desde el inicio (0) no elimina nada (segundo 0) y añade si hay que ir a clase


