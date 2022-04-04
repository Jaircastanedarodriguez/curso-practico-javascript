// Código del cuadrado
console.group("Cuadrado");

function PerimetroCuadrado(lado) {
    return lado * 4;
}


function AreaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();

// Código del triángulo

function PerimetroTriangulo(lado1, lado2, base) {
    L1 = parseInt(lado1);
    L2 = parseInt(lado2);
    B = parseInt(base);
    const perimetrotri = L1 + L2 + B;
    return perimetrotri;
}

// Altura del triángulo

function altura(lado, base) {
    if (base < lado){
        return Math.sqrt((lado * lado) - (base * base));
    } else{
        alert("El triángulo no es isósceles");
    }

}


function AreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Código del círculo

console.group("Círculos");

// Radio 

const RadioCirculo = 4;
console.log("El Radio del círculo es: " + RadioCirculo + "cm.");

// Diametro

function DiametroCirculo(radio) {
    return radio * 2;
}

// PI 

const PI = Math.PI;
console.log("Pi es: " + PI);


// Circunferencia 

function PerimetroCirculo(radio) {
    const Diametro = DiametroCirculo(radio);
    return Diametro * PI;
}


// Area

function AreaCirculo(radio) {
    return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML


// Calculo del perimetro del cuadrado
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);

}
//Calculo del área del cuadrado
function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = AreaCuadrado(value);
    alert(area);
}

//Calculo del perimetro del triangulo 
function CalculoPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2Triangulo");
    const value2 = input2.value;
    const input3 = document.getElementById("InputBaseTriangulo");
    const value3 = input3.value;

    const perimetro = PerimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

//Calculo del área del triangulo
function CalculoAreaTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const value1 = input1.value;

    const input2 = document.getElementById("InputLado2Triangulo");
    const value2 = input2.value;

    const input3 = document.getElementById("InputBaseTriangulo");
    const value3 = input3.value;

    const A = altura(value1 || value2, value3);
    if (value1 == value2) {
        const area = AreaTriangulo(A, value2);
        alert(area);
    } else {
        alert("El triángulo no es isósceles")
    }

}

//Calculo del perimetro del circulo
function CalculoPerimetroCirculo() {
    const input1 = document.getElementById("InputRadioCirculo");
    const value1 = input1.value;

    const perimetro = PerimetroCirculo(value1);
    alert(perimetro);
}

//Calculo del area del circulo
function CalculoAreaCirculo() {
    const input1 = document.getElementById("InputRadioCirculo");
    const value1 = input1.value;

    const area = AreaCirculo(value1);
    alert(area);
}