var aEspecies = ['Perro', 'lince', 'colibri', 'jilguero', 'elefante', 'buitre', 'canario', 'ballena', 'alimoche']
var aMamifero= [true, true,false,false,true,false,false,true,false]


document.write(`<button id="mamiferos">Mamiferos</button>`)
document.write(`<button id="pajaros">pajaros</button>`)

document.write(`<p>`);
for (let index = 0; index < aEspecies.length; index++) {
    if (aMamifero[index])
    document.write(`<span class="mamifero">${aEspecies[index]}</span> `);
    else
    document.write(`<span class="pajaro">${aEspecies[index]}</span> `);
    
}
document.write(`</p>`);

