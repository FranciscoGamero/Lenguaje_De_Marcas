let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Math.round(Math.random() * 100));
}
    numeros.sort(function(a, b) {
        return b - a;
    });
alert(numeros);