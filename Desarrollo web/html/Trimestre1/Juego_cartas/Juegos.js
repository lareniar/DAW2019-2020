//Creación de tabla para el juego de las cartas.
function CrearTablaCartas(n, m) {
	var aArray = [];

	for (iFila = 0; iFila < n; iFila++) {
		aArray[iFila] = [];
	}

	for (iFila = 0; iFila < n; iFila++) {
		for (iCol = 0; iCol < m; iCol++) {
			bRepe = true;
			while (bRepe) {
				bRepe = false;
				iAleatorio = Math.floor(Math.random() * n * m + 1);
				for (f = 0; f < n; f++) {
					for (c = 0; c < m; c++) {
						if (aArray[f][c] == iAleatorio) {
							bRepe = true;
						}
					}
				}
			}
			aArray[iFila][iCol] = iAleatorio;
		}
	}
	// Conseguimos que haya parejas de valores aleatorios restando lo necesario.
	for (iFila = 0; iFila < n; iFila++) {
		for (iCol = 0; iCol < m; iCol++) {
			aArray[iFila][iCol] = (aArray[iFila][iCol] > ((n * m) / 2)) ? aArray[iFila][iCol] - ((n * m) / 2) : aArray[iFila][iCol];
		}
	}

	return aArray;
}

//funciones endika y aritz

//declaracion de variables

//integer
//columnas
n = 4;
//filas
m = 10;
//contador de clicks para el jugador
iTotalClicks = ((n * m) * 2 + 1);
//tiempo de partida
iTiempo = m * 20;

//strings
sRutaCarta0 = "./resources/0.png";

//booleans
click = true;
click2 = false;

bNoCambiarCarta = false;
bVictoria = true;
bTiempo = true;

//arrays
aArray = CrearTablaCartas(n, m);
aCartaBocaArriba = CrearArrayBoolean(n, m);
//escribir el encabezado
document.write(
	` <div class="divHeader">
		<div> 
			<p class="clic">Clicks Restantes: 
				<span id="clic">${iTotalClicks}</span>
			</p>
		</div>
		<div>
			<p class="tiempo">Tiempo: 
				<span id="tiempo">${iTiempo}</span>
			</p>
			</div>
		</div>`
)
//tiempo de partida
reloj = setInterval(CuentaAtras, 1000);
//tabla
document.write("<div class='d-flex justify-content-center'>");
document.write("<table class='table table-borderless' >");


//colocar imagenes de cartas boca abajo
for (let row = 0; row < n; row++) {
	document.write("<tr>");
	for (let column = 0; column < m; column++) {
		document.write(
			`<td style=" background-color: #14785C; " align='center'> <div style="border: 1px solid white;width: 65px;
			height: 95px;"><img  style="padding: 5px;" id="carta${row}${column}" onclick="CambiarCarta(${row},${column})" src= "${sRutaCarta0}""> </div></td>`
		);
	}
	document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

function CambiarCarta(row, column) {
	if (!bNoCambiarCarta) {
		console.log(iTotalClicks);
		if (aCartaBocaArriba[row][column] == false && (iTotalClicks > 0 && bTiempo)) {
			if (click) {
				document.getElementById(`carta${row}${column}`).src =
					`./resources/${aArray[row][column]}.png`
				rowCarta1 = row;
				columnCarta1 = column;
				id1 = document.getElementById(`carta${row}${column}`);
				sCarta1 = document.getElementById(`carta${row}${column}`).src;
				click = false;
				iTotalClicks--;
				document.getElementById("clic").innerHTML = iTotalClicks;
			} else if ((row != rowCarta1 || columnCarta1 != column) && !click) {
				document.getElementById(`carta${row}${column}`).src =
					`./resources/${aArray[row][column]}.png`
				rowCarta2 = row;
				columnCarta2 = column;
				sCarta2 = document.getElementById(`carta${row}${column}`).src;
				id2 = document.getElementById(`carta${row}${column}`);
				//bool segundo click
				click = true;
				iTotalClicks--;
				document.getElementById("clic").innerHTML = iTotalClicks;
				//bool while
				bNoCambiarCarta = true;
				ComprobarIguales();
			}
		}
	}

}
//comprobar si son iguales y si se ha acabado la partida
function ComprobarIguales() {

	if (sCarta1 == sCarta2) {
		aCartaBocaArriba[rowCarta1][columnCarta1] = true;
		aCartaBocaArriba[rowCarta2][columnCarta2] = true;
		//bool de cambiarCarta() para volver a jugar
		bNoCambiarCarta = false;
		//comprobar si se ha acabado el juego
		ComprobarVictoria();
	} else {
		setTimeout(VoltearCarta, 1000);
	}
}
//devolvemos la carta al estado boca abajo cuando se hacen 2 clics
function VoltearCarta() {
	id1.src = sRutaCarta0;
	id2.src = sRutaCarta0;
	if (id1 != id2) {
		bNoCambiarCarta = false;
	}

}

function CrearArrayBoolean(n, m) {
	aCartas = new Array;
	for (let row = 0; row < n; row++) {
		aCartasFila = new Array;
		for (let column = 0; column < m; column++) {
			aCartasFila.push(false);
		}
		aCartas.push(aCartasFila);
	}

	return aCartas;
}

function ComprobarVictoria() {
	bVictoria = true;
	for (let row = 0; row < aCartaBocaArriba.length; row++) {
		for (let column = 0; column < aCartaBocaArriba.length; column++) {
			if (aCartaBocaArriba[row][column] == false)
				bVictoria = false;
		}
	}
	if (bVictoria) {
		alert("has ganado");
		clearInterval(reloj);
		cohetes();
	}
}

function CuentaAtras() {
	iTiempo--;
	if (iTotalClicks == 0) {
		alert("Te has quedado sin clicks y has perdido");
		clearInterval(reloj);
	} else if (iTiempo == 0) {
		bTiempo = false;
		clearInterval(reloj);
		document.getElementById("tiempo").innerHTML = iTiempo;
		alert("Se ha acabo la partida porque te has quedado sin tiempo")
	} else {
		document.getElementById("tiempo").innerHTML = iTiempo;
	}

}