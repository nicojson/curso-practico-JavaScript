const listaPonderada = [
    9, .20, //
    10, .30,
    8.5, .50,
];
/* Tenemos que mandarle un array con el valor y su
ponderacion de cada valor seguidamente */
function calcularMediaPonderada(listaPonderada){

    let totalSumCalif = [];
// i+= aumenta la cantidad que le digas
    for (i = 0; i < (listaPonderada.length); i+=2){
        totalSumCalif.push(listaPonderada[i] * listaPonderada[i + 1]);
    };

    const resultSumCalif = totalSumCalif.reduce(
        function(valorAcomulado = 0, nuevoValor){
            return valorAcomulado + nuevoValor;
        }
    );

    let totalSumPonderado = [];

    for (i = 1; i < (listaPonderada.length); i+=2){
        totalSumPonderado.push(listaPonderada[i]);
    }

/* el metodo reduce de los array suma cada elmento con el anterior 
y devuelve un unico valor */
    const resultSumPonderado = totalSumPonderado.reduce(
        function(valorAcomulado = 0, nuevoValor){
            return valorAcomulado + nuevoValor;
        }
    );
    
    return resultSumCalif / resultSumPonderado;
}