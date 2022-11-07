const spesaLista = ["pane", "pasta", "salumi", "latte", "uova", "formaggi", "pesce", "voglia di vivere", "acqua"]


let i = 0;
let text = "";

while (spesaLista[i]) {
  text += spesaLista[i] + "<br>";
  i++;
}

document.getElementById("lista").innerHTML = text;