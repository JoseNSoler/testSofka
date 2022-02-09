var matriz = []

var tamaño1=5
var tamaño2=5
var casillasTotales = tamaño1*tamaño2

for (let i = 0; i < tamaño1;i++){
    matriz.push([])
    for (let j = 0; j < tamaño2; j++) {
        matriz[i].push( Math.round(Math.random()*10))
    }
}
console.log(matriz)

