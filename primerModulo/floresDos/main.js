let entradaUsuario = document.getElementById("entradaUsuario");
let entradaUno = document.getElementById("entradaUno");
let entradaDos = document.getElementById("entradaDos");
let entradaTres = document.getElementById("entradaTres");
let entradaCuatro = document.getElementById("entradaCuatro");


let btnMultiplo = document.getElementById("btnMultiplo");

let salidaflor = document.getElementById("salidaflor");

let numeroMultiplo = 0;
let entradaA = 3
let entradaB = 5
let entradaC = 6
let entradaD = 7


let frase = "El numero digitado es:"
let fraseDos = " y la flor es:"

//Capturar el evento

entradaUsuario.addEventListener("input", (evento) => {
    numeroMultiplo = evento.target.value
    console.log( numeroMultiplo)
})

entradaUno.addEventListener("input", (evento) => {
    entradaA = evento.target.value
    console.log(entradaA)
})

entradaDos.addEventListener("input", (evento) => {
    entradaB = evento.target.value
    console.log(entradaB)
})

entradaTres.addEventListener("input", (evento) => {
    entradaC = evento.target.value
    console.log(entradaC)
})

entradaCuatro.addEventListener("input", (evento) => {
    entradaD = evento.target.value
    console.log(entradaD)
})

//logica para determinar si es multiplo

function esMultiplo(numero, entradaA, entradaB, entradaC, entradaD) {
    if((numero % entradaA == 0) && (numero % entradaB == 0) && (numero % entradaC == 0) && ( numero % entradaD == 0)){
        return "Violeta"
    } else if ((numero % entradaA == 0) && (numero % entradaB == 0)){
        return "Margarita"
    } else if ((numero % entradaC == 0) && ( numero % entradaD == 0)){
        return "Rosa"
    } else {
        return "Ninguna, no es multiplo de ninguno"
    }

}


btnMultiplo.addEventListener("click", () => {
    let resultado = esMultiplo(numeroMultiplo, entradaA, entradaB, entradaC, entradaD)
    let hijo = document.createElement("p")
    hijo.innerHTML = frase + " " + numeroMultiplo +" "+ fraseDos + " " + resultado
    salidaflor.appendChild(hijo)
})