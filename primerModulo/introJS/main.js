
let entradaUsuarioPar = document.getElementById("entradaUsuarioPar");
let btnPar = document.getElementById("btnPar");
let salidaPar = document.getElementById("salidaPar");
let numeroEjercicioEsPar = 0


//Capturamos el evento en el input
entradaUsuarioPar.addEventListener("input", (evento) =>{
    numeroEjercicioEsPar = evento.target.value
    console.log(numeroEjercicioEsPar)
})

// Logica para saber si es Par
function esPar(numero) {
    if(numero % 2 == 0){
        return "Es par"
    } else {
        return "No es par"
    }  
}

// funcion para el boton calcular
btnPar.addEventListener("click", () => {
    let resultado = esPar(numeroEjercicioEsPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioEsPar +" "+resultado
    salidaPar.appendChild(hijo)
})












// console.log("Hola mundo");

// let suma
// suma = 3+5;
// console.log(suma);

// let resta = 3-5
// console.log("Esto es una resta de 3-5: " + resta)



// // el modulo % el operador de módulo % se usa para saber si un número es par o impar

// let numero = 9

// if (numero % 2 == 0){
//     console.log("El numero", numero, "es par")
// } else {
//     console.log( "El numero ", numero, " no es par")
// }

