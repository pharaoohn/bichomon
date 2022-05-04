console.log(document.title);




let generacion = document.querySelector("#gen-1").innerHTML = "Generasion 1 Pokimon"

let color = document.querySelector(".infocard-list")

color.style = "background-color: " + "brown";

let urlPagina = window.location;
console.log(urlPagina)

console.log(document.domain);

let nodos = document.querySelectorAll("img, .src")

console.log(nodos)

for(i = 0; i <= nodos.length; i++){
    nodos[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}
    
let flying = document.querySelectorAll(".itype flying")
console.log(flying);


