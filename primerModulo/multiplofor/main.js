let entrada = document.getElementById("entrada")
let btnCalcular = document.getElementById("btnCalcular")
let salida = document.getElementById("salida")


let multiplo = 0

entrada.addEventListener("input", (evento) => {
    multiplo = evento.target.value
    console.log(multiplo)
})

// function esMultiplo(multiplo){
//     if((multiplo % 3 == 0) && (multiplo % 5 == 0 )) {
//         return "FizzBuzz"
//     } else if ( multiplo % 3 == 0) {
//         return "Fizz"
//     } else if ( multiplo % 5 == 0 ) {
//         return "Buzz"
//     }
// }



function esMultiplo(multiplo){
    for ( let i=1; i <= multiplo; i++){
        if( (i % 3 == 0) && (i % 5 == 0)){
            // return "FizzBuzz"
            let hijo = document.createElement("li") 
        hijo.innerHTML = i
        salida.appendChild(hijo)
            // console.log("FizzBuzz")
        } else if (i % 3 == 0 ) {
            let hijo = document.createElement("li") 
        hijo.innerHTML = i
            // return "Fizz"
            // console.log("Fizz")
        } else if(i % 5 == 0) {
            let hijo = document.createElement("li") 
            hijo.innerHTML = i
            // return "Buzz"
            // console.log("Buzz")
        } else {
            // return i
            let hijo = document.createElement("li") 
            hijo.innerHTML = i
            // console.log(i)
        }
        // let hijo = document.createElement("ol") 
        // hijo.innerHTML = i
    }
}

// console.log(hola(15))


// function esMultiplo(multiplo){
//     if((multiplo % 3 == 0) && (multiplo % 5 == 0 )) {
//         return "FizzBuzz"
//     } else if ( multiplo % 3 == 0) {
//         return "Fizz"
//     } else if ( multiplo % 5 == 0 ) {
//         return "Buzz"
//     }
// }

btnCalcular.addEventListener("click", () => {
    let resultado = esMultiplo(multiplo)
    // let hijo = document.createElement("ol")
    // hijo.innerHTML = multiplo + " " + resultado
    // salida.appendChild(hijo)
})

