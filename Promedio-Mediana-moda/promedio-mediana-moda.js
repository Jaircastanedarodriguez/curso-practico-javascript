// Función para el calculo del promedio aritmetico 

// function capturaDatos(){
//     let valor1 = document.getElementsByClassName("valor_aritmetico"),
//     arrayGuardar = [];

//     console.log(valor1[1].value);
// }

// https://www.youtube.com/watch?v=wJWjJWs81g4
// https://es.stackoverflow.com/questions/154451/como-puedo-almacenar-datos-desde-un-formulario-a-un-array-en-javascript



// function CalculoPromedioAritmetico() { 

//     capturaDatos();

//     let sumaLista = 0;

//     for (let i = 0; i < lista1.length; i++) {
//         sumaLista = sumaLista + lista1[i];
//     }
//     const promedio = sumaLista / lista1.length;
//     return promedio; 

//     // const resultadoAritmetico = document.getElementById("resultadoPromedioAritmetico");

//     // resultadoAritmetico.innerText = promedio;


// }


function viewsArrayInput() {
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName('valor_aritmetico'),
        namesValues = [].map.call(inputsValues, function (dataInput) {
            arrayInput.push(Number(dataInput.value));
        });

    arrayInput.forEach(function (inputsValuesData) {
        // console.log ("El dato es:"  + arrayInput);

        // var lengthArray = arrayInput.length;

        var sumaLista = 0;

        for (let i = 0; i < arrayInput.length; i++) {
            sumaLista = sumaLista + arrayInput[i];
        }

        const promedio = sumaLista / arrayInput.length;

        const resultadoAritmetico = document.getElementById("resultadoPromedioAritmetico");

        resultadoAritmetico.innerText = promedio;
    })
}



function CalculoPromedioPonderado(lista, peso) {
    let sumaLista = 0;
    let sumaPeso = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + (lista[i] * peso[i]);
        sumaPeso = sumaPeso + peso[i];
    }

    const promedioPonderado = sumaLista / sumaPeso;
    return promedioPonderado;
}