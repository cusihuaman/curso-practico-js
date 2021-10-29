//calcular el perimetro del cuadrado
// const ladocuadrado=8;
// console.log("los lados de un cuadrado miden" + ladocuadrado + "cm");

// function perimetroCuadrado(lado){
//     return lado * 4;
// } 
//  perimetroCuadrado();

// // const areacuadrado=ladocuadrado * ladocuadrado;
// //
// function areacuadrado(lado){
//     return lado * lado;
// } 
//  areacuadrado();

// console.log("el area del cuadrado es"+ areacuadrado + "cm");

//codigo del triangulo

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//
function calcularPerimetro(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro)

}

function calculararea(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const area=calculararea(value);
    alert(area)

}
