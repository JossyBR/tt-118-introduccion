 

let btnMultiplo = document.getElementById("btnMultiplo");

let salidaflor = document.getElementById("salidaflor");

let numeroMultiplo = 0;

let frase = "El numero digitado es:"
let fraseDos = " y la flor es:"

//Capturar el evento

entradaUsuario.addEventListener("input", (evento) => {
    numeroMultiplo = evento.target.value
    console.log( numeroMultiplo)
})

//logica para determinar si es multiplo

function esMultiplo(numero) {
    if((numero % 3 == 0) && (numero % 5 == 0) && (numero % 6 == 0) && ( numero % 7 == 0)){
        return "Violeta"
    } else if ((numero % 3 == 0) && (numero % 5 == 0)){
        return "Margarita"
    } else if ((numero % 6 == 0) && ( numero % 7 == 0)){
        return "Rosa"
    } else {
        return "Ninguna, no es multiplo de ningunoe"
    }

}


btnMultiplo.addEventListener("click", () => {
    let resultado = esMultiplo(numeroMultiplo)
    let hijo = document.createElement("p")
    hijo.innerHTML = frase + " " + numeroMultiplo +" "+ fraseDos + " " + resultado
    salidaflor.appendChild(hijo)
})