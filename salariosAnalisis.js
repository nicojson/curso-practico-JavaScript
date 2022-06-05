// funciones helpers
//función para comprobar si es par
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = (sumaLista / lista.length).toFixed(2);
    return promedioLista;
};

// calculadora de mediana

/* comentarion: por alguna razon esta funcion no retorna el valor
directa mente tines que hacerlo mediante un console.log */
function calcularMediana (listaValores){

    const mitad = parseInt(listaValores.length / 2);

    if (esPar(listaValores.length)){
        const personitaMitad1 = listaValores[mitad - 1];
        const personitaMitad2 = listaValores[mitad];

        const mediana = calcularPromedio([personitaMitad1, personitaMitad2]);
        return mediana;
    }
    else{
        const personitaMitad = listaValores[mitad];
        return personitaMitad;
    }
};

// mediana general
const salariosMexico = salariosMX.map(
    function(personita){
        return personita.salario;
    }
);

salariosMXSorted = salariosMexico.sort(
    function(a, b){
        return a - b;
    } 
);

const medianaGeneral = calcularMediana(salariosMXSorted);

// mediana top 10%

const spliceStart = (salariosMXSorted.length * 90) / 100;
const spliceCount = salariosMXSorted.length - spliceStart;

const salariosTop10 = salariosMXSorted.splice(spliceStart, spliceCount);
const medianaTop10MX = parseFloat(calcularMediana(salariosTop10));

 console.log({
     medianaGeneral,
     medianaTop10MX
 });