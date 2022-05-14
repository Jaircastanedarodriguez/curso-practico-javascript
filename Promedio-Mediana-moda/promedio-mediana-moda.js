// Función para calcular el promedio aritmetico
function CalculoPromedioAritmetico() {
    let arrayInput = new Array(); // Creamos un array vacio 
    let inputsValues = document.getElementsByClassName('valor_aritmetico'), // Obtenemos los datos de los inputs
        // Pasamos cada dato obtenido en inputsValues al array
        namesValues = [].map.call(inputsValues, function (dataInput) {
            arrayInput.push(Number(dataInput.value));
        });

    // Calculamos el promedio artimetico
    let sumaLista = 0;  // Se crea una variable vacia
    // Con este for sumamos cada elemento del array, recorremos el array y vamos sumando cada digito al acumulado
    for (let i = 0; i < arrayInput.length; i++) { 
        sumaLista += arrayInput[i];
    }
    // Dividimos la suma de todos los elementos de array sobre el total del elementos
    const promedio = sumaLista / arrayInput.length;
    // Obtenemos el elemento del html en donde mostraremos el resultado
    const resultadoAritmetico = document.getElementById("resultadoPromedioAritmetico");
    // Escribimos el resultado en el elemento que obtuvimos previamente
    resultadoAritmetico.innerText = promedio;

}

//Función para calcular el promedio ponderado | La forma de obtener los datos en un array fue la misma que en la función anterior
function CalculoPromedioPonderado() {
    let datos = new Array();
    let datosValue = document.getElementsByClassName('valor_ponderado'),
        namesDatosValues = [].map.call(datosValue, function (datosInput) {
            datos.push(Number(datosInput.value));
        });

    let peso = new Array();
    let pesoValue = document.getElementsByClassName('peso'),
        namesPesoValues = [].map.call(pesoValue, function (datapeso) {
            peso.push(Number(datapeso.value));
        });
    // Tenemos 2 array, uno con los datos y otro con el peso de cada dato
    
    // Creamos 2 variables, una para la suma del peso de los valores y la otra para la suma de los datos
    let pesoValor = 0;
    let sumaPeso = 0;
    
    /* Recorremos el array de peso y en cada elemento lo vamos a multiplicar por un elemento del valor, luego este se
     sumara al anterior, tambien (Aprovechando que los dos array miden lo mismo), sumamos todos los datos de peso*/
    for (i = 0; i < peso.length; i++) {
        pesoValor += (peso[i] * datos[i]);
        sumaPeso += peso[i];
    }
    // dividimos suma de la multiplicación de cada uno de los datos por peso sobre la suma de todos los pesos
    Ponderado = pesoValor / sumaPeso;

    // Obtenemos el elemento donde se va a mostrar la respuesta
    const resultadoPonderado = document.getElementById("resultadoPromedioPonderado");
    // Escribimos el resultado en el elemento 
    resultadoPonderado.innerText = Ponderado;

}