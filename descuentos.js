const PrecioOriginal=100;
const descuento=20;

function CPrecionConDescuento(precio,descuento){
    const PorcentajePrecioDescuento=100-descuento;
    const PrecioDescuento=(precio *PorcentajePrecioDescuento/100);
    return PrecioDescuento;
}
// 
function clickDeDescuento(){
    const inputPrice=document.getElementById("inputPrice");
    const pricevalue=inputPrice.value;

    const inputDiscount=document.getElementById("inputDiscount");
    const discountvalue=inputDiscount.value;

    const precioConDescuento=CPrecionConDescuento(pricevalue,discountvalue);

    const resulP=document.getElementById("priceParrafo");
    resulP.innerText= "Precion con descuento es"+ precioConDescuento;
}

// console.log({
//     PrecioOriginal,
//     descuento,
//     PorcentajePrecioDescuento,
//     PrecioDescuento,
// });