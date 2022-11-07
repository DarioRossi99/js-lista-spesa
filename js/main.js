const spesaLista = []

let text = (spesaLista);

while (spesaLista.length < 6) {
    const input = prompt("spesa da fare");
    spesaLista.push ( input );
}

console.log( spesaLista )

document.getElementById("lista").innerHTML = text;