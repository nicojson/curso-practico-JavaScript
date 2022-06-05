
function calcularPromedio(lista){
    // let sumaLista = [];
    // for (let i = 0; i < listaValores.length; i++){
    //     sumaLista = sumaLista + listaValores[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = (sumaLista / lista.length).toFixed(2);
    return promedioLista;

}
