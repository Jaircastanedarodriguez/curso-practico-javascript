
// Función para el calculo del promedio aritmetico 
function CalculoPromedioAritmetico(lista) { // Lista es el array en el que se guardaran los datos
    let sumaLista = 0; // Variable en la que se guardara la suma de los valores del array

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedio = sumaLista / lista.length;
    return promedio; 
}

function CalculoPromedioPonderado(lista, peso){
    let sumaLista = 0; 
    let sumaPeso = 0;

    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + (lista[i]*peso[i]);
        sumaPeso = sumaPeso + peso[i];
    }

    const promedioPonderado = sumaLista / sumaPeso; 
    return promedioPonderado; 
}