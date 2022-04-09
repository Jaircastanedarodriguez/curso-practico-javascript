function CalculoPromedioAritmetico(Lista) {
    // let SumaLista = 0;

    // for (let i = 0; i < Lista.length; i++) {
    //     SumaLista = SumaLista + Lista[i];
    // }

    const SumaLista = Lista.reduce(
        function (ValorAcumulado = 0, NuevoElemento) {
            return ValorAcumulado + NuevoElemento;
        }
    )

    const PromedioLista = SumaLista / Lista.length;

    return PromedioLista;
}

function CalculoPromedioPonderado(Lista, Peso) {
    let SumaLista = 0;
    let SumaPeso = 0;

    for (let i = 0; i < Lista.length; i++) {
        SumaLista = SumaLista + (Lista[i] * Peso[i]);
        SumaPeso = SumaPeso + Peso[i];
    }

    const PromedioPonderadoLista = SumaLista / SumaPeso;

    return PromedioPonderadoLista;
}