const misproductos = [
    "Heladera",
    "Microonda",
    "cocina",
    "Lavarropa",
    "televisor"
];
const product_listHTML = document.getElementById("lista-elementos");
function renderizarLista() {
    const itemsHTML = misproductos.map(producto => `<li>${producto}</li>`).join("");
    product_listHTML.innerHTML = itemsHTML;
    console.log("lista actual:", misproductos);
    console.log("HTML generado:", itemsHTML);
}
const mostrarListaBtn = document.getElementById("mostrarListaBtn");
console.log("valor de mostrarListaBtn:", mostrarListaBtn);

mostrarListaBtn.addEventListener("click", renderizarLista);
