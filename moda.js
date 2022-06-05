const listaValores = [
    1,
    2,
    3,
    3,
    2,
    4,
    3,
    1,
    5,
    6,
    8,
    8,
    9,
]

function calcularModa(listaValores){
    const listaFrecuencia = {};

    listaValores.map(
        function (elemento) {
            if(listaFrecuencia[elemento]){
                listaFrecuencia[elemento] += 1;
            } else{
                listaFrecuencia[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaFrecuencia);
    const listaOrdenada = listaArray.sort(
        function(valorAcomulado, nuevoValor){
            return valorAcomulado[1] - nuevoValor[1];
        }
    );
    return listaOrdenada[listaOrdenada.length - 1];
}