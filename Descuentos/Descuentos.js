// const PrecioOriginal = 120;
// const Descuento = 18;

// const PorcentajePrecioConDescuento = 100 - Descuento;
// const PrecioConDescuento = (PrecioOriginal * PorcentajePrecioConDescuento) / 100;

function CalculoPrecioConDescuento(Precio, Descuento) {
    const PorcentajePrecioConDescuento = 100 - Descuento;

    const PrecioConDescuento = (Precio * PorcentajePrecioConDescuento) / 100;
    return (PrecioConDescuento);
}


function OnClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const PriceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value;

    const CuponDiscount = document.getElementById("Cupon");
    const CuponValue = CuponDiscount.value;
    DescuentoNumeroEntero = parseInt(DiscountValue);
    CuponNumeroEntero = parseInt(CuponValue);
    let DescuentoValue;

    if (DiscountValue == 0) {
        DescuentoValue = CuponValue;
    } else {
        DescuentoValue = DiscountValue;
    }

    const PrecioConDescuento = CalculoPrecioConDescuento(PriceValue, DescuentoValue);
    const ResultP = document.getElementById("ResultP");

    ResultP.innerText = "$ " + PrecioConDescuento;
}


// console.log({
//     PrecioOriginal,
//     Descuento,
//     PorcentajePrecioConDescuento,
//     PrecioConDescuento,
// });