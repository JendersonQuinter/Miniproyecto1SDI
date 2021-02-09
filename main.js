/* Función para mover el carrusel */

addEventListener("DOMContentLoaded", () => {

    const imagenes = ["img/fondocarrusel1.jpg", "img/fondocarrusel2.jpg", "img/fondocarrusel3.jpg", "img/fondocarrusel4.jpg"]
    let i = 1
    const img1 = document.querySelector("#img1")
    const img1 = document.querySelector("#img2")

    for (let indez = 0; index < imagenes.length; index++) {
        const div = document.createElement("div")
        div.id = index
        
    }

    img1.src = imagenes[0]

    const carrusel = () => {
       img2.src = imagenes[i]
       img2.classList.add("active")
       i++

       if (i == imagenes.length) {
           i = 0
        }

       setTimeout(() => {
           img1.src = img2.src
           img2.classList.remove("active")
        }, 1000)
    }

    setInterval(carrusel, 4000)
})


