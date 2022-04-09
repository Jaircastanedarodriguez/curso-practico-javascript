function CalculoMediana(Lista) {
    const NumeroElementosArray = parseInt(Lista.length);

    if (NumeroElementosArray % 2 == 0) {
        const PosicionMediaMenor = Math.trunc(NumeroElementosArray / 2) - 1;
        const ValorMediaMenor = Lista[PosicionMediaMenor];

        const PosicionMediaMayor = Math.trunc(NumeroElementosArray / 2);
        const ValorMediaMayor = Lista[PosicionMediaMayor];

        const ValorMediaPar = (ValorMediaMayor + ValorMediaMenor) / 2;
        console.log(ValorMediaPar);
    } else {
        const ValorMedianaImpar = Math.trunc(NumeroElementosArray / 2);
        console.log(Lista[ValorMedianaImpar]);
    }
}