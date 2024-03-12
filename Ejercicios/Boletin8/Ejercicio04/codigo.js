let valores = [true, 5, false, "o", "adios", 2];

if(valores[3] > valores[4]){
    alert(valores[3]+" es mayor")
} else if (valores[4] > valores[3]){
    alert(valores[4]+ "es mayor");
} else {
    alert("Son iguales");
}

if(valores[0]){
    alert(valores[0]);
}
if(!valores[2]){
    alert(valores[2]);
}
alert(valores[1]+valores[5]);
alert(valores[1]-valores[5]);
alert(valores[1]/valores[5]);
alert(valores[1]*valores[5]);
alert(valores[1]%valores[5]);