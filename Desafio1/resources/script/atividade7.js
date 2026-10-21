
let notas = [7, 8, 10, 5, 12, 9];


console.log("Notas originais:", notas);


let i = 0;

while (i < notas.length) {
    if (notas[i] < 0 || notas[i] > 10) {
        notas.splice(i, 1);
    } else {
        i++;
    }
}


console.log("Notas válidas:");
notas.forEach(function(nota) {
    console.log(nota);
});


console.log("Tem nota 10?", notas.includes(10));


console.log("Posição da nota 8:", notas.indexOf(8));


notas.sort(function(a, b) {
    return a - b;
});

console.log("Notas finais ordenadas:", notas);

