//Tomo los ID
let entrada0 = document.getElementById("entrada0");
let btnCalcular = document.getElementById("btnCalcular")
let salida = document.getElementById("salida");

//Variable para guardar el valor de la entrada
let entrada = 0

//Capturo el evento de entrada
entrada0.addEventListener("input", (evento) => {
    entrada = evento.target.value
    console.log(entrada)
})


function funcionFibo(entrada){
     let fibonacci = [0,1]

     if(entrada==2) {
        return fibonacci
     } else if (entrada==1){
        return[0]
     } else {
        for(let p=2; p<entrada; p++){
            fibonacci[p]= fibonacci[p-1] + fibonacci[p-2]
            console.log(p)
        }
        return fibonacci
     }
}

// console.log(funcionFibo(5))

btnCalcular.addEventListener("click", () => {
    let resultado = funcionFibo(entrada)
    let hijo = document.createElement("p")

    hijo.innerHTML = "El numero que usted digito es " + entrada + " La serie Fibonacci " + resultado
    salida.appendChild(hijo)
})

