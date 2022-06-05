const listaValores = [
    10000,
    2000,
    1000,
    4000,
    3000,
    1000000,
]

function calcularMediana (listaValores){
    function ordenar(a, b){
        return a - b;
    }
    listaValores = listaValores.sort(ordenar)

    const indexMitad = listaValores.length / 2;
    const moduloIndex = (listaValores.length % 2);
    // lista impar
    if(moduloIndex != 0){
        const medianaInpar = parseInt(indexMitad);
        const mediana = listaValores[medianaInpar];
        return mediana;
    }
    // lista par
    else {
        const medianaPar1 = listaValores[(indexMitad - 1)];
        const medianaPar2 = listaValores[indexMitad];
        const medianaPar = (medianaPar1 + medianaPar2) / 2;
        return medianaPar;
    }
}