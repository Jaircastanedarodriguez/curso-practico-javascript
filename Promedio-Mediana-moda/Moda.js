function CalculoModa(Lista) {

    const ListaCount = {};

    Lista.map(
        function (Elemento) {
            if (ListaCount[Elemento]) {
                ListaCount[Elemento] += 1;
            } else {
                ListaCount[Elemento] = 1;
            }
        }
    )

    const ListaArray = Object.entries(ListaCount).sort(
        function (ElementoA, ElementoB) {
            return ElementoA[1] - ElementoB[1];
        }
    )

    const Moda = ListaArray[ListaArray.length - 1];

    return Moda;
}