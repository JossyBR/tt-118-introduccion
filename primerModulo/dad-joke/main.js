let btnJoke = document.getElementById("btnJoke")
let joke = document.getElementById("joke")


btnJoke.addEventListener("click", getJoke)

 async function getJoke() {
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers:{
                "Accept": "application/json"
            }
        })
        const data = await res.json()
        joke.innerHTML = "Este es el chiste: " + data.joke
        // console.log(data)
        // console.log(data.joke)     
    } catch (error) {
        console.error("Error in call")
        joke.innerHTML = "Hubo un error al obtener el chiste"
    }
    
}