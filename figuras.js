// codigo Cuadrados

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

// codigo Triangulos

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// codigo Circulos
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = radio * 2;
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// aqui comenzamos a interactuar con HTML
// cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1Triangulo");
    const lado1Value = lado1.value;
    const lado2 = document.getElementById("lado2Triangulo");
    const lado2Value = lado2.value;
    const base = document.getElementById("baseTriangulo");
    const baseValue = base.value;

    const perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const baseValue = base.value;
    const altura = document.getElementById("alturaTriangulo");
    const alturaValue = altura.value;

    const area = areaTriangulo(baseValue, alturaValue);
    alert(area);
}

// Circulos
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}

// Reto: calcular la altura de un triángulo isósceles
/* Esta función valida si almenos 2 de los lados que ingreso
el usuario son iguales sin inportar el orden
*/
function calcularAltura(lado1, lado2, base){
    const lado1AlCuadrado = lado1**2;
    const lado2AlCuadrado = lado2**2; 
    const baseAlCuadrado = base**2; 
    if (lado1 == lado2 && lado2 != base){
        const altura = Math.sqrt((lado1AlCuadrado) - (baseAlCuadrado/4));
        return altura.toFixed(2);
    }
    else if (lado2 == base && base != lado1){
        const altura = Math.sqrt((baseAlCuadrado) - (lado1AlCuadrado/4));
        return altura.toFixed(2);
    }
    else if (lado1 == base && base != lado2){
        const altura = Math.sqrt((lado1AlCuadrado) - (lado2AlCuadrado/4));
        return altura.toFixed(2);
    }
    else{
        alert("Lo siento el triangulo no es isósceles");
    }
}

function calcularAlturaIsosceles(){
    const lado1 = document.getElementById("lado1TrianguloIsosceles");
    const lado1Value = lado1.value;
    const lado2 = document.getElementById("lado2TrianguloIsosceles");
    const lado2Value = lado2.value;
    const base = document.getElementById("baseTrianguloIsosceles");
    const baseValue = base.value;

    const altura = calcularAltura(lado1Value, lado2Value, baseValue);
    alert(altura);
}



