function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajeConDescuento))/100;
    return precioConDescuento;
}

function precioConDescunto(){
    const precio = document.getElementById("precioOriginal");
    const precioValue = precio.value;
    const descuento = document.getElementById("porcentajeDescuento");
    const descuentoValue = descuento.value;

    const precioFinal = calcularPrecioConDescuento(precioValue, descuentoValue);
    const mensajePrecioFinal = document.getElementById("precioFinal");
    mensajePrecioFinal.innerText = `El precio con descuento es: $${precioFinal}`;
}

/* 
Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.
*/
var listaDecupones = [
    {nombre: "cupon1", valor: 20},
    {nombre: "cupon2", valor: 15},
    {nombre: "cupon3", valor: 10},
    {nombre: "cupon4", valor: 25}
]

function encontrarCupon(cupon){
    var cuponEncontrado = listaDecupones.find(function(buscarCupon){
        return buscarCupon.nombre == cupon;
    });
    var valorCupon = cuponEncontrado.valor;
    return valorCupon;
};

function precioDescuentoCupon(){
    const precio = document.getElementById("precioOriginal");
    const precioValue = precio.value;
    const cuponDescuento = document.getElementById("cuponDescuento");
    const cuponValue = cuponDescuento.value;
    const descuento = encontrarCupon(cuponValue);

    const precioFinal = calcularPrecioConDescuento(precioValue, descuento);
    const mensajePrecioFinal = document.getElementById("precioFinal");
    mensajePrecioFinal.innerText = `El precio con descuento es: $${precioFinal}`;
}