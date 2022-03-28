// Código del cuadrado
console.group("Cuadrado");
const LadoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + LadoCuadrado);

const PerimetroCuadrado = LadoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + PerimetroCuadrado);

const AreaCuadrado = LadoCuadrado * LadoCuadrado;
console.log("El Area del cuadrado es: " + AreaCuadrado);
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const LadoTriangulo3 = 4;

console.log(
    "Los lados del triángulo miden: " +
    LadoTriangulo1 +
    "cm, " +
    LadoTriangulo2 +
    "cm, " +
    LadoTriangulo3 +
    "cm."
);

const AlturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + AlturaTriangulo + "cm.")

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + LadoTriangulo3; 
console.log("El perimetro del triángulo es: " + PerimetroTriangulo + "cm.");

const BaseTriangulo = LadoTriangulo3;
const AreaTriangulo = (BaseTriangulo * AlturaTriangulo)/2;
console.log("El area del triángulo es: " + AreaTriangulo + "cm^2.")
console.groupEnd();

//Código del círculo

console.group("Círculos");

// Radio 

const RadioCirculo = 4; 
console.log("El Radio del círculo es: " + RadioCirculo + "cm.");

// Diametro

const DiametroCirculo = RadioCirculo * 2; 
console.log("El Diametro del Círculo es: " + DiametroCirculo + "cm.");

// PI 

const PI = Math.PI;
console.log("Pi es: " + PI);


// Circunferencia 

const PerimetroCirculo = DiametroCirculo * PI; 
console.log("El Perimetro del círculo es: " + PerimetroCirculo + "cm.");

// Area

const AreaCirculo = PI * (RadioCirculo * RadioCirculo);
console.log("El Area del círculo es: " + AreaCirculo + "cm^2.");

