// Helpers

function EsPar(numero) {
    return (numero % 2 === 0);
}

// Calculo de mediana

function MedianaSalarios(Lista) {
    const Mitad = parseInt(Lista.length / 2);

    if (EsPar(Lista.length)) {
        const PersonaMitad1 = Lista[Mitad - 1];
        const PersonaMitad2 = Lista[Mitad];
        return ((PersonaMitad1 + PersonaMitad2) / 2);
    } else {
        const PersonaMitad = Lista[Mitad];
        return PersonaMitad;
    }
}

// Mediana General

const Salarios = colombia.map(
    function (Persona) {
        return Persona.salary;
    }
);

const SalariosSolted = Salarios.sort(
    function (SalaryA, SalaryB) {
        return SalaryA - SalaryB;
    }
);

const MedianaGeneral = MedianaSalarios(SalariosSolted);

// Mediana del Top 10%

const SpliceStart = (SalariosSolted.length * 90) / 100;
const SpliceCount = SalariosSolted.length - SpliceStart;

const SalariosTop10 = SalariosSolted.slice(SpliceStart - 1,(SalariosSolted.length - 1));

const MedianaTop10 = MedianaSalarios(SalariosTop10);


console.log({
    MedianaGeneral,
    MedianaTop10,
})