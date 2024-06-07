

// cmabio turno 
var ultimoMovimiento;
var piezasConsPosibilidadDeEliminar = [];
var piezaElimino = false;
var piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = [];


let initialVariables = {
	tiempoRestante: 2
}

let globales ={
	espectador:false,
	socket_accion_recibida:false, // si hay una accion recibida por el socket
	intervalSeleccionadoAnimacion:null,
	animacionSelectedFases:0,
	ultimoMovimientoBlancas:{
			origen:null,
			destino:null
	},
	ultimoMovimientoNegras:{
			origen:null,
			destino:null
	},
	intervalCountTurno:null //  intervalo de cuenta regresiva para cambiar turno 
}
var enTurno = {
	cantMovimientos: 0,
	ultimaPiezaMovida: null,
	moviendoEnemigo: false,
	tiempoRestante: initialVariables.tiempoRestante

}
/**
 * 
 * @param {string: 'coronasound' | 'comidasound'|'movidasound'| 'soplarsound' | 'turnochangesound'} id
 *  
 */
function reporducir(id){
	document.getElementById(id).play()

}
// manejo de  tiempo en turno

function devolverMovimiento(ElementOrigen,ElementDestino){
			// buscamos el indice del destino para cambiar su posicion al origen
			let indiceAMover= piezas.findIndex((Element=>(Element.row==ElementDestino?.row && Element?.column==ElementDestino.column )))
			if(indiceAMover!=undefined)
			{
					piezas[indiceAMover].row =ElementOrigen.row
					piezas[indiceAMover].column =ElementOrigen.column

			}
}

setInterval(() => {
	console.log(gSelectedPieceIndex)
			if(gSelectedPieceIndex>=0)
			{
				console.log('animo')
					drawPiece(piezas[gSelectedPieceIndex],piezas[gSelectedPieceIndex].color,true)
			}
			
}, 500);

function countStartTurno(){


	fadeIn(document.getElementsByClassName("container_contador")[0])
	globales.intervalCountTurno =setInterval(() => {

	if (enTurno.tiempoRestante == 0) {
		document.getElementById('tiempoRestante').innerText = enTurno.tiempoRestante
		
		cambioTurno()
		fadeOut(document.getElementsByClassName("container_contador")[0])
		clearInterval(globales.intervalCountTurno)
		console.log("cambiamos turno")


	} else if (enTurno.tiempoRestante > 0) {
		
		document.getElementById('tiempoRestante').innerText = enTurno.tiempoRestante
		console.log(enTurno.tiempoRestante)
		enTurno.tiempoRestante -= 1;
	}
}, 1000);
}
// Imagen de fondo
var img = new Image();
img.src = "./corona.png";
var imgDama = new Image();
imgDama.src = "./damachina.png";



function validarTodosEnemigosQuePuedenEliminar() {
	let piezasFiltradas = [];


	if (turnoBlancas) {
		piezasFiltradas = piezas.filter((Element) => Element.color == kBlancas)

	} else if (turnoNegras) {
		piezasFiltradas = piezas.filter((Element) => Element.color == kNegras)

	}

	piezasFiltradas.map((Element) => {
		if (Element instanceof Reina) {
			validarEnemigosReinaPuedeEleminiar(Element.color, Element)
		} else {
			validarEnemigosSercaPuedeEliminar(Element.color, Element)

		}

	})

}
function validarEnemigosReinaPuedeEleminiar(color, pieza) {


	// validamos los 4 bucles en todas las direcciones 
	// validamos sentido arriba izquierda  inicio
	let enemigosDetectados = [];
	let enemigoReconocido;
	let vacioReconocido;
	for (let index = 1; index < 13; index++) {
		// inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;
		if ((pieza.row - index) >= 0 && (pieza.column - index) >= 0) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - index) && Element.column == (pieza.column - index)))
			if (enemigoReconocido != undefined && (pieza.row - index - 1) >= 0 && (pieza.column - index - 1) >= 0) {

				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row - index - 1) && Element.column == (pieza.column - index - 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
					return;
				}
			}
		}
	}
	// validamos sentido arriba izquierda  final 

	// validamos sentido arriba derecha  inicio

	for (let index = 1; index < 13; index++) {
		//  inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;

		if ((pieza.row - index) >= 0 && (pieza.column + index) <= 9) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - index) && Element.column == (pieza.column + index)))
			if (enemigoReconocido != undefined && (pieza.row - index - 1) >= 0 && (pieza.column + index + 1) <= 9) {
				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row - index - 1) && Element.column == (pieza.column + index + 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
					return;
				}

			}
		}
	}
	// validamos sentido arriba derecha  final 

	// validamos sentido abajo izquierda  inicio

	for (let index = 1; index < 13; index++) {
		// inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;

		if ((pieza.row + index) <= 9 && (pieza.column - index) >= 0) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + index) && Element.column == (pieza.column - index)))
			if (enemigoReconocido != undefined && (pieza.row + index + 1) <= 9 && (pieza.column - index - 1) >= 0) {
				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row + index + 1) && Element.column == (pieza.column - index - 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
					return;
				}

			}
		}
	}
	// validamos sentido abajo izquierda  final 

	// validamos sentido abajo derecha  inicio

	for (let index = 1; index < 13; index++) {
		// inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;

		if ((pieza.row + index) <= 9 && (pieza.column + index) <= 9) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + index) && Element.column == (pieza.column + index)))
			if (enemigoReconocido != undefined && (pieza.row + index + 1) <= 9 && (pieza.column + index + 1) <= 9) {
				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row + index + 1) && Element.column == (pieza.column + index + 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
					return;
				}

			}
		}
	}
	// validamos sentido abajo derecha  final 




}
function validarEnemigosSercaPuedeEliminar(color, pieza) {
	// primeros enemigos
	// if(color=="#000000") // negraas
	{
		// let pieza = piezas.find(Element=>(Element.color=="#000000" && Element.row==3 && Element.column==8))
		let enemigoArriba = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - 1) && (Element.column == (pieza.column - 1))))
		let enemigoAbajo = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + 1) && (Element.column == (pieza.column - 1))))
		console.log(pieza)
		console.log(enemigoArriba)
		console.log(enemigoAbajo)


		if (enemigoAbajo != undefined) {

			let row = enemigoAbajo.row + 1; // como es abajo es row+1
			console.log(row)
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoAbajo.column) {
					evalVacioColumn = enemigoAbajo.column + 1;
				} else {

					evalVacioColumn = enemigoAbajo.column - 1;
				}
				console.log(evalVacioColumn)

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined  ) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

		if (enemigoArriba != undefined) {

			let row = enemigoArriba.row - 1; // como es abajo es row+1
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoArriba.column) {
					evalVacioColumn = enemigoArriba.column + 1;
				} else {

					evalVacioColumn = enemigoArriba.column - 1;
				}

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

	}
	// segundos enemigos
	{
		// let pieza = piezas.find(Element=>(Element.color=="#000000" && Element.row==3 && Element.column==8))
		enemigoArriba = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - 1) && (Element.column == (pieza.column + 1))))
		enemigoAbajo = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + 1) && (Element.column == (pieza.column + 1))))
		console.log(pieza)
		console.log(enemigoArriba)
		console.log(enemigoAbajo)


		if (enemigoAbajo != undefined) {

			let row = enemigoAbajo.row + 1; // como es abajo es row+1
			console.log(row)
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoAbajo.column) {
					evalVacioColumn = enemigoAbajo.column + 1;
				} else {

					evalVacioColumn = enemigoAbajo.column - 1;
				}
				console.log(evalVacioColumn)

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

		if (enemigoArriba != undefined) {

			let row = enemigoArriba.row - 1; // como es abajo es row+1
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoArriba.column) {
					evalVacioColumn = enemigoArriba.column + 1;
				} else {

					evalVacioColumn = enemigoArriba.column - 1;
				}

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

	}

}
function validarEnemigosSerca(color, pieza) {
	// primeros enemigos
	// if(color=="#000000") // negraas
	{
		// let pieza = piezas.find(Element=>(Element.color=="#000000" && Element.row==3 && Element.column==8))
		let enemigoArriba = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - 1) && (Element.column == (pieza.column - 1))))
		let enemigoAbajo = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + 1) && (Element.column == (pieza.column - 1))))
		console.log(pieza)
		console.log(enemigoArriba)
		console.log(enemigoAbajo)


		if (enemigoAbajo != undefined) {

			let row = enemigoAbajo.row + 1; // como es abajo es row+1
			console.log(row)
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoAbajo.column) {
					evalVacioColumn = enemigoAbajo.column + 1;
				} else {

					evalVacioColumn = enemigoAbajo.column - 1;
				}
				console.log(evalVacioColumn)

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined && !(pieza instanceof Reina) && pieza.color ==kNegras) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminar.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

		if (enemigoArriba != undefined) {

			let row = enemigoArriba.row - 1; // como es abajo es row+1
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoArriba.column) {
					evalVacioColumn = enemigoArriba.column + 1;
				} else {

					evalVacioColumn = enemigoArriba.column - 1;
				}

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined && !(pieza instanceof Reina) && pieza.color ==kBlancas) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminar.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

	}
	// segundos enemigos
	{
		// let pieza = piezas.find(Element=>(Element.color=="#000000" && Element.row==3 && Element.column==8))
		enemigoArriba = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - 1) && (Element.column == (pieza.column + 1))))
		enemigoAbajo = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + 1) && (Element.column == (pieza.column + 1))))
		console.log(pieza)
		console.log(enemigoArriba)
		console.log(enemigoAbajo)


		if (enemigoAbajo != undefined) {

			let row = enemigoAbajo.row + 1; // como es abajo es row+1
			console.log(row)
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoAbajo.column) {
					evalVacioColumn = enemigoAbajo.column + 1;
				} else {

					evalVacioColumn = enemigoAbajo.column - 1;
				}
				console.log(evalVacioColumn)

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined && !(pieza instanceof Reina) && pieza.color ==kNegras) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminar.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

		if (enemigoArriba != undefined) {

			let row = enemigoArriba.row - 1; // como es abajo es row+1
			if (row >= 0 && row <= 10) {

				let evalVacioColumn = 0;

				// si no hay ninguna pieza en la posicion  y no esta fuera del tablero entonces se puede eliminar 

				// si origen es menor a enemigo entonces evaluar enemigo mas 1 en vacio 
				// si origen es mayor  a enemigo entonces evaluar enemigo menos  1 en vacio 
				if (pieza.column < enemigoArriba.column) {
					evalVacioColumn = enemigoArriba.column + 1;
				} else {

					evalVacioColumn = enemigoArriba.column - 1;
				}

				let evalVacio = piezas.find(Element => (Element.row == row && Element.column == evalVacioColumn))
				console.log(evalVacio)
				console.log(evalVacio != undefined)
				if (evalVacio == undefined && !(pieza instanceof Reina) && pieza.color ==kBlancas) {
					//  marcamos como habilitado para eliminar

					piezasConsPosibilidadDeEliminar.push(pieza)
				}

			} else {
				// fuera de tabla 

			}
		}

	}

}
function validarEnemigosReina(color, pieza) {


	// validamos los 4 bucles en todas las direcciones 
	// validamos sentido arriba izquierda  inicio
	let enemigosDetectados = [];
	let enemigoReconocido;
	let vacioReconocido;
	for (let index = 1; index < 13; index++) {
		// inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;
		if ((pieza.row - index) >= 0 && (pieza.column - index) >= 0) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - index) && Element.column == (pieza.column - index)))
			if (enemigoReconocido != undefined && (pieza.row - index - 1) >= 0 && (pieza.column - index - 1) >= 0) {

				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row - index - 1) && Element.column == (pieza.column - index - 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminar.push(pieza)
					return;
				}
			}
		}
	}
	// validamos sentido arriba izquierda  final 

	// validamos sentido arriba derecha  inicio

	for (let index = 1; index < 13; index++) {
		//  inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;

		if ((pieza.row - index) >= 0 && (pieza.column + index) <= 9) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row - index) && Element.column == (pieza.column + index)))
			if (enemigoReconocido != undefined && (pieza.row - index - 1) >= 0 && (pieza.column + index + 1) <= 9) {
				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row - index - 1) && Element.column == (pieza.column + index + 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminar.push(pieza)
					return;
				}

			}
		}
	}
	// validamos sentido arriba derecha  final 

	// validamos sentido abajo izquierda  inicio

	for (let index = 1; index < 13; index++) {
		// inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;

		if ((pieza.row + index) <= 9 && (pieza.column - index) >= 0) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + index) && Element.column == (pieza.column - index)))
			if (enemigoReconocido != undefined && (pieza.row + index + 1) <= 9 && (pieza.column - index - 1) >= 0) {
				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row + index + 1) && Element.column == (pieza.column - index - 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminar.push(pieza)
					return;
				}

			}
		}
	}
	// validamos sentido abajo izquierda  final 

	// validamos sentido abajo derecha  inicio

	for (let index = 1; index < 13; index++) {
		// inicializamos
		enemigoReconocido = undefined;
		vacioReconocido = undefined;

		if ((pieza.row + index) <= 9 && (pieza.column + index) <= 9) {

			enemigoReconocido = piezas.find(Element => (Element.color != color && Element.row == (pieza.row + index) && Element.column == (pieza.column + index)))
			if (enemigoReconocido != undefined && (pieza.row + index + 1) <= 9 && (pieza.column + index + 1) <= 9) {
				vacioReconocido = piezas.find(Element => (Element.row == (pieza.row + index + 1) && Element.column == (pieza.column + index + 1)))
				if (vacioReconocido == undefined) {

					piezasConsPosibilidadDeEliminar.push(pieza)
					return;
				}

			}
		}
	}
	// validamos sentido abajo derecha  final 




}

// bucle para cambios de turno 
setInterval(() => {

	let fechaActual = new Date().getTime()
	var diff = fechaActual - ultimoMovimiento
	if (!isNaN(diff) && (diff / 1000) > 2) {
		console.log("cambio de turno ")
		cambioTurno();
		limpiarMovimientos()

		console.log(diff)
		ultimoMovimiento = undefined
		console.log(ultimoMovimiento)
		// --cambio de truano 
	}
}, 2000);

var kBoardWidth = 10;
var kBoardHeight = 10;
var kPieceWidth = 50;
var kPieceHeight = 50;
var kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
var kPixelHeight = 1 + (kBoardHeight * kPieceHeight);
var kFilasIniciales = 4;
var kNegras = "#000000";
var kBlancas = "#ffffff";

var kColorCuadroClaro = "#edb580"; // Marrón claro para un cuadro
var kColorCuadroOscuro = "#8b4d16"; // Marrón oscuro para el otro cuadro

var turnoBlancas; // Para el control de turnos. 
var turnoNegras;

var sonTablas = false;
var acuerdoTablas = false;

var indiceABorrar = -1; // Para borrar una pieza. 
var legalMoves; // Para los movimientos legales. 

var gCanvasElement;
var gDrawingContext;
var gPattern;

var piezas = [];

var gNumPieces = 30; // Controla las piezas metidas en memoria. 
var gNumMoves = 0; // Cuenta los movimientos sin que se produzca un salto. 

var gSelectedPieceIndex;
var gSelectedPieceHasMoved;
var gMoveCount;
var gMoveCountElem;
var gGameInProgress;

var saltosDelete = false;


function getCursorPosition(e) {
	/* returns Cell with .row and .column properties */
	var x;
	var y;
	if (e.pageX != undefined && e.pageY != undefined) {
		x = e.pageX;
		y = e.pageY;
	}
	else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= gCanvasElement.offsetLeft;
	y -= gCanvasElement.offsetTop;
	x = Math.min(x, kBoardWidth * kPieceWidth);
	y = Math.min(y, kBoardHeight * kPieceHeight);
	var cell = new Casilla(Math.floor(y / kPieceHeight), Math.floor(x / kPieceWidth));
	return cell;
}

/*function gGameInProgress(){
	return true;
}*/

function isTheGameOver() {
	legalMoves = getLegalMoves();
	if (legalMoves.length === 0) {
		return true;
	}
	else {
		return false;
	}
}

function endGame() {
	gGameInProgress = false;
	if (sonTablas) {
		alert("Game over. Juego en tablas");
	}
	else if (turnoBlancas) {
		alert("Game over. Ganan Negras");
	}
	else {
		alert("Game over. Ganan Blancas");
	}
	if(!globales.socket_accion_recibida) // si no es unaccion recibida emitimos el endGame
	socket.emit("endGame",{
			gGameInProgress,
			sonTablas,
			turnoBlancas,
			turnoNegras,
			current_sala_id:localStorage.getItem('current_sala_id'),
			iduser_emisor:localStorage.getItem("id_user")
	})
	newGame();
}

function getLegalMoves() {
	var theLegalMoves = [];
	var z = 0;

	while (z < piezas.length) {
		if (((turnoBlancas) && (kBlancas == piezas[z].color)) || ((turnoNegras) && (kNegras == piezas[z].color))) {
			var nuevosMovimientos = getLegalMovesPieza(piezas[z]); // Se obtienen los movimientos legales de una sola pieza.
			// Ordenamos los saltos y los movimientos. 
			var t = 0;
			while (t < nuevosMovimientos.length) { // Se quitan los saltos y se ponen los primeros. 
				if (nuevosMovimientos[t] instanceof Jump) {
					var oneJump = nuevosMovimientos.splice(t, 1);
					theLegalMoves = oneJump.concat(theLegalMoves); // Los saltos se concatenan por delante. 
				}
				else {
					t++;
				}
			}

			theLegalMoves = theLegalMoves.concat(nuevosMovimientos); // Se concatenan con la lista de todos los movimientos para ese jugador pero por detr�s. 
		}
		z++;
	}
	return theLegalMoves;
}

function getLegalMovesPieza(unaPieza) {
	var i = -1;
	var fila = 0;
	var columna = 0;
	var someLegalMoves = [];
	var vacia = false;

	while (i < 2) {
		if (((unaPieza.row != 0) && (turnoBlancas)) || ((unaPieza.row != 7) && (turnoNegras))) { // Si estan al final del tablero, no hay movimientos posibles
			if (((unaPieza.column != 0) && (i == -1)) || ((unaPieza.column != 7) && (i == 1))) { // Si est�n en una esquina del tablero, solo hay que comprobar uno de los laterales
				if (turnoBlancas) { // As� controlamos la direcci�n de la pieza
					fila = unaPieza.row - 1;
					columna = unaPieza.column + i;
				}
				else {
					fila = unaPieza.row + 1;
					columna = unaPieza.column + i;
				}
				var j = 0;
				var existe = false;
				while ((j < piezas.length) && (existe == false)) { // Si hay una pieza en la casilla a la que nos queremos mover, no nos podemos mover, a menos que se pueda saltar
					if ((piezas[j].row == fila) && (piezas[j].column == columna)) {
						existe = true;
						if (piezas[j].color != unaPieza.color) { // Si son de distinto color, igual se puede saltar
							if ((i < 0) && (turnoBlancas) && (unaPieza.column >= 2) && (unaPieza.row >= 2)) { // Miramos si, siendo blancas, tienen sitio para saltar 
								fila = unaPieza.row - 2;
								columna = unaPieza.column - 2;
								vacia = casillaVacia(fila, columna); // Si tiene sitio y est� vac�a, hay sitio para hacer un salto
							}
							else if ((i > 0) && (turnoBlancas) && (unaPieza.column <= 5) && (unaPieza.row >= 2)) { // Miramos si, siendo blancas, tienen sitio para saltar 
								fila = unaPieza.row - 2;
								columna = unaPieza.column + 2;
								vacia = casillaVacia(fila, columna);  // Si tiene sitio y est� vac�a, hay sitio para hacer un salto
							}
							else if ((i < 0) && (turnoNegras) && (unaPieza.column >= 2) && (unaPieza.row <= 5)) { // Lo mismo para negras
								fila = unaPieza.row + 2;
								columna = unaPieza.column - 2;
								vacia = casillaVacia(fila, columna);
							}
							else if ((i > 0) && (turnoNegras) && (unaPieza.column <= 5) && (unaPieza.row <= 5)) {
								fila = unaPieza.row + 2;
								columna = unaPieza.column + 2;
								vacia = casillaVacia(fila, columna);
							}
						}
					}
					else {
						j++;
					}
				}
				if ((existe == false)) { // Si la casilla contigua est� libre, se puede mover.
					var aMove = new Move(unaPieza.row, unaPieza.column, fila, columna);
					someLegalMoves.push(aMove);
				}
				else if ((existe == true) && (vacia == true)) {  //Si no est� libre pero se puede hacer un salto, tambi�n.
					var aJump = new Jump(unaPieza.row, unaPieza.column, fila, columna);
					someLegalMoves.unshift(aJump); // Los saltos quedan los primeros. 
				}
			}
		}
		i = i + 2;
	}
	return someLegalMoves;
}

function eliminaFichasEnCaminoReina(fila, columna) {
	var y = 0;
	var vacia = true;
	while ((y < piezas.length) && (vacia == true)) {
		if ((piezas[y].row == fila) && (piezas[y].column == columna)) {
			indiceABorrar = y;
			borrarPieza();
			indiceABorrar = -1;

			vacia = false;

		}
		else {
			y++;
		}
	}
	saltosDelete = false;

}
function casillaVacia(fila, columna) {
	var y = 0;
	var vacia = true;
	while ((y < piezas.length) && (vacia == true)) {
		if ((piezas[y].row == fila) && (piezas[y].column == columna)) {
			vacia = false;
		}
		else {
			y++;
		}
	}
	return vacia;
}

// Función para mover la reina
function moverReina(reina, filaDestino, columnaDestino) {
	// Verifica que el movimiento sea diagonal
	if (Math.abs(filaDestino - reina.row) !== Math.abs(columnaDestino - reina.column)) {
		return false; // No es un movimiento diagonal válido
	}

	if (piezaElimino) {

		piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []
	} else {
		piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []
		validarTodosEnemigosQuePuedenEliminar()

	}

	var direccionFila = (filaDestino - reina.row > 0) ? 1 : -1;
	var direccionColumna = (columnaDestino - reina.column > 0) ? 1 : -1;

	var filaActual = reina.row + direccionFila;
	var filaActual2 = reina.row + direccionFila;
	var columnaActual = reina.column + direccionColumna;
	var columnaActual2 = reina.column + direccionColumna;

	// Verifica que todas las casillas entre la posición actual y la de destino estén vacías
	while (filaActual !== filaDestino && columnaActual !== columnaDestino) {
		let piezaIdentificada = piezas.find(Element => (Element.row == filaActual && Element.column == columnaActual))
		let colorPiezaIdentificada = piezaIdentificada != undefined ? piezaIdentificada.color : ''
		if (!casillaVacia(filaActual, columnaActual) && (colorPiezaIdentificada == '' || colorPiezaIdentificada == reina.color)) {
			// si es enemiga la eliminamos

			return false; // No se puede mover porque hay una pieza en el camino
		}

		// filaActual += direccicomprobarCoronaciononFila;
		filaActual += direccionFila;
		columnaActual += direccionColumna;
	}

	// volvemos a recorrer para eliminar enemigos
	while (filaActual2 !== filaDestino && columnaActual2 !== columnaDestino) {
		let piezaIdentificada = piezas.find(Element => (Element.row == filaActual2 && Element.column == columnaActual2))
		let colorPiezaIdentificada = piezaIdentificada != undefined ? piezaIdentificada.color : ''
		if (!casillaVacia(filaActual2, columnaActual2) && (colorPiezaIdentificada != '' && colorPiezaIdentificada != reina.color)) {
			eliminaFichasEnCaminoReina(filaActual2, columnaActual2)
		}
		filaActual2 += direccionFila;
		columnaActual2 += direccionColumna;

	}



	reina.row = filaActual;
	reina.column = columnaActual;
	reporducir('movidasound')
	enTurno.cantMovimientos++;
	enTurno.ultimaPiezaMovida = reina

	// cambioTurno()

	// validarEnemigosReina(reina.color,{row:reina.row , column:reina.column ,color:reina.color })
	// let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==reina.row && Element.column==reina.column && Element.color==reina.color  ))
	//    if(enPosiblidad!=undefined && piezaElimino)
	// 	{

	// 		ultimoMovimiento=new Date().getTime()
	// 	}else{
	// 		ultimoMovimiento=undefined ;
	// 		cambioTurno(); 
	// 	}

	gMoveCount += 1;
	gSelectedPieceIndex = -1;
	gSelectedPieceHasMoved = false;
	drawBoard()
	gNumMoves += 1;
	limpiarMovimientos()
	// Mueve la reina a la nueva posición
	// moverPieza(reina, filaDestino, columnaDestino);
	return true;
}

function isThereAnotherCaptureOption(reina) {
	// Obtener la fila y columna actual de la reina
	var filaActual = reina.row; // Corregido
	var columnaActual = reina.column; // Corregido

	// Verificar si hay alguna pieza que la reina pueda capturar en cualquier dirección
	for (var dir of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
		var deltaFila = dir[0];
		var deltaColumna = dir[1];

		// Verificar si hay una pieza que la reina pueda capturar en la dirección actual
		if (isThereAPieceBetweenReinaMove(filaActual, columnaActual, deltaFila, deltaColumna)) {
			return true; // Se encontró otra pieza que la reina puede capturar
		}
	}

	return false; // No se encontraron más piezas que la reina pueda capturar
}


function drawBoard() {

	gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

	gDrawingContext.beginPath();

	/* vertical lines */
	for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
		gDrawingContext.moveTo(0.5 + x, 0);
		gDrawingContext.lineTo(0.5 + x, kPixelHeight);
	}

	/* horizontal lines */
	for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
		gDrawingContext.moveTo(0, 0.5 + y);
		gDrawingContext.lineTo(kPixelWidth, 0.5 + y);
	}

	/* draw it! */
	gDrawingContext.strokeStyle = "#ccc";
	gDrawingContext.stroke();

	for (var i = 0; i < piezas.length; i++) {
		if (piezas[i] instanceof Reina) {
			drawQueen(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
		else {
			drawPiece(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
	}

	gMoveCountElem.innerHTML = gMoveCount;

	if (gGameInProgress && isTheGameOver()) {
		endGame();
	}
	654321
	var colorCuadroClaro = "#edb580"; // Marrón claro
	var colorCuadroOscuro = "#8b4d16"; // Marrón oscuro

	// Limpia el tablero
	gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

	// Colorea los cuadros del tablero
	for (var i = 0; i < kBoardWidth; i++) {
		for (var j = 0; j < kBoardHeight; j++) {
			// Alternar los colores de los cuadros
			var colorCuadro = ((i + j) % 2) ? colorCuadroClaro : colorCuadroOscuro;
			gDrawingContext.fillStyle = colorCuadro;
			gDrawingContext.fillRect(i * kPieceWidth, j * kPieceHeight, kPieceWidth, kPieceHeight);
		}
	}

	// Dibuja las piezas después de colorear los cuadros del tablero
	for (var i = 0; i < piezas.length; i++) {
		if (piezas[i] instanceof Reina) {
			drawQueen(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
		else {
			drawPiece(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
	}
}
function setPiecesStyles() {
	for (var i = 0; i < piezas.length; i++) {
		if (piezas[i] instanceof Reina) {
			drawQueen(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
		else {
			drawPiece(piezas[i], piezas[i].color, i == gSelectedPieceIndex);
		}
	}
}
function drawPiece(p, color, selected) {
	var column = p.column;
	var row = p.row;
	var x = (column * kPieceWidth) + (kPieceWidth / 2);
	var y = (row * kPieceHeight) + (kPieceHeight / 2);
	var radius = (kPieceWidth / 2) - (kPieceWidth / 10);
	gDrawingContext.beginPath();
	gDrawingContext.arc(x, y, radius, 0, Math.PI * 2, false);
	gDrawingContext.closePath();
	gDrawingContext.fillStyle = color;
	gDrawingContext.fill();
	gDrawingContext.strokeStyle = "#000";
	gDrawingContext.stroke();
	if (selected) {

		if(globales.animacionSelectedFases==0){
			gDrawingContext.fillStyle = "#0056b3";
			gDrawingContext.fill();
			globales.animacionSelectedFases=1
		}else if(globales.animacionSelectedFases==1){
			gDrawingContext.fillStyle = "#007bff";
			gDrawingContext.fill();
			globales.animacionSelectedFases=2
		}else if(globales.animacionSelectedFases==2){
			gDrawingContext.fillStyle = "#0056b3";
			gDrawingContext.fill();
			globales.animacionSelectedFases=0
			
		}
	

		       
			// 	              setTimeout(()=>{
			// 					gDrawingContext.fillStyle = "#84e788";
			// 					gDrawingContext.fill();
			// gDrawingContext.drawImage(imgDama, x - ((40 * 50) / 100), y - ((40 * 50) / 100), 40, 40);

			// 	              },100)
		// clearInterval(globales.intervalSeleccionadoAnimacion)
		// globales.intervalSeleccionadoAnimacion=	setInterval(()=>{
			// 	let objlocal=Object.assign({}, gDrawingContext); 
			//             objlocal.fillStyle = "#01ffa8";
			// 		objlocal.fill();
			//               setTimeout(()=>{
				//                   objlocal.fillStyle = "#9156eb";
				// 		objlocal.fill();
				//               },1000)
				//         },2000)
			}
			gDrawingContext.drawImage(imgDama, x - ((40 * 50) / 100), y - ((40 * 50) / 100), 40, 40);
}

function drawQueen(p, color, selected) {

	var column = p.column;
	var row = p.row;
	var x = (column * kPieceWidth) + (kPieceWidth / 2);
	var y = (row * kPieceHeight) + (kPieceHeight / 2);
	var radius = (kPieceWidth / 2) - (kPieceWidth / 10);
	gDrawingContext.beginPath();
	gDrawingContext.arc(x, y, radius, 0, Math.PI * 2, false);
	gDrawingContext.closePath();
	gDrawingContext.fillStyle = color;
	gDrawingContext.fill();
	gDrawingContext.strokeStyle = "#000";
	gDrawingContext.stroke();
	if (selected) {
		gDrawingContext.fillStyle = "#ff0000";
		gDrawingContext.fill();
	}

	gDrawingContext.drawImage(img, x - ((30 * 50) / 100), y - ((30 * 50) / 100), 30, 30);
	// Para la corona circular. 
	gDrawingContext.beginPath();
	gDrawingContext.arc(x, y, radius + 2.5, 0, Math.PI * 2, false);
	gDrawingContext.closePath();
	gDrawingContext.strokeStyle = "#000";
	gDrawingContext.stroke();
}

function guardarPosiciones() {

	// Primero tenemos que vaciar para poder guardar
	for (var i = 0; i < gNumPieces; i++) {
		localStorage.removeItem("pieza" + i + ".fila");
		localStorage.removeItem("pieza" + i + ".columna");
		localStorage.removeItem("pieza" + i + ".color");
	}

	localStorage.setItem("numMove", gMoveCount);

	// Cogemos la cantidad de piezas actual, que es la que vamos a guardar en memoria tras vaciar lo anterior. 
	// Actualizamos el valor en memoria.
	gNumPieces = piezas.length;
	localStorage.setItem("numPiezas", gNumPieces);
	if (turnoBlancas) {
		localStorage.setItem("esTurno", "blancas");
	}
	else {
		localStorage.setItem("esTurno", "negras");
	}
	for (var i = 0; i < piezas.length; i++) {
		localStorage.setItem("pieza" + i + ".fila", piezas[i].row);
		localStorage.setItem("pieza" + i + ".columna", piezas[i].column);
		localStorage.setItem("pieza" + i + ".color", piezas[i].color);
	}
}

function cargarPosiciones() {
	piezas = [];

	gNumPieces = parseInt(localStorage.getItem("numPiezas"));
	gMoveCount = parseInt(localStorage.getItem("numMove"));

	for (var i = 0; i < gNumPieces; i++) {
		var row = parseInt(localStorage.getItem("pieza" + i + ".fila"));
		var column = parseInt(localStorage.getItem("pieza" + i + ".columna"));
		var color = localStorage.getItem("pieza" + i + ".color");
		if ((!(color === "null")) && (piezas.length < 24)) { // No puede haber m�s de 24 piezas v�lidas. 
			piezas.push(new Casilla(row, column, color));
		}
	}

	if (parseInt(localStorage.getItem("esTurno")) == "blancas") {
		turnoBlancas = true;
		turnoNegras = false;
	}
	else {
		turnoBlancas = false;
		turnoNegras = true;
	}

	limpiarMovimientos();

	drawBoard();
}

function empiezanBlancas() {

	document.getElementById("moveNegras").innerHTML = "<h3>Negras</h3>";
	document.getElementById("moveBlancas").innerHTML = "<h3>Blancas</h3>";

	document.getElementById("esTurno").innerHTML = "Empiezan Blancas:";
	document.getElementById("changeTurn").value = "Treminar Turno Blancas"

	document.getElementById("esTurno").style.background = "white"
	document.getElementById("esTurno").style.color = "black"
	document.getElementById("esTurno").style.boxShadow = "1px 1px gray"
}


function newGame() {

	empiezanBlancas();

	// Reiniciamos variables. 
	gNumMoves = 0;
	gNumPieces = 24;
	sonTablas = false;
	acuerdoTablas = false;
	turnoBlancas = true;
	turnoNegras = false;


	piezas = []; // Vaciamos la lista de piezas, por si estamos pulsando el resetButton. 

	for (var i = 0; i < kFilasIniciales; i++) {
		for (var j = (i) % 2; j < kBoardHeight; j = j + 2) {
			piezas.push(new Casilla(i, j, kNegras));
		}
	}

	for (var i = kBoardHeight - 1; i >= kBoardHeight - kFilasIniciales; i--) {
		for (var j = (i) % 2; j < kBoardHeight; j = j + 2) {
			piezas.push(new Casilla(i, j, kBlancas));
		}
	}

	gNumPieces = piezas.length;
	gSelectedPieceIndex = -1;
	gSelectedPieceHasMoved = false;
	gMoveCount = 0;
	gGameInProgress = false;

	turnoBlancas = true;
	turnoNegras = false;

	drawBoard();
	document.getElementById("lienzo").style.boxShadow = "0rem 0rem 14px 7px white"

	gGameInProgress = true;
}

function Casilla(row, column, color) {
	this.row = row;
	this.column = column;
	this.color = color;
}

function Reina(row, column, color) {
	Casilla.apply(this, [row, column, color]);
}

Reina.prototype = new Reina();
Reina.prototype.constructor = Reina;

function coronar(peon) {
	piezas = piezas.filter(Element => (!(Element.row == peon.row && Element.column == peon.column && Element.color == peon.color)));
	piezas.push(new Reina(peon.row, peon.column, peon.color));



	let piezaEncontrada = piezas.find(Element => (Element.row == peon.row && Element.column == peon.column && Element.color == peon.color))
	if (piezaEncontrada == undefined) {
		alert("coronada no reconocida")
	}
	else{
		
		reporducir('coronasound')
	}
	

	enTurno.ultimaPiezaMovida = piezaEncontrada;
}

function comprobarCoronacion() {
	if (((turnoBlancas) && (piezas[gSelectedPieceIndex].color == kBlancas) && (piezas[gSelectedPieceIndex].row == 0)) ||
		((turnoNegras) && (piezas[gSelectedPieceIndex].color == kNegras) && (piezas[gSelectedPieceIndex].row == 9))) {
		var candidata = piezas.splice(gSelectedPieceIndex, 1);
		coronar(candidata[0]);
	}
}
function comprobarCoronacionPostKill(piesa) {
	let indice = piezas.findIndex((Element, index) => { if (Element.row == piesa.row && Element.column == piesa.column && Element.color == piesa.color) { return index } })
	gSelectedPieceIndex = indice
	if (((turnoBlancas) && (piezas[gSelectedPieceIndex].color == kBlancas) && (piezas[gSelectedPieceIndex].row == 0)) ||
		((turnoNegras) && (piezas[gSelectedPieceIndex].color == kNegras) && (piezas[gSelectedPieceIndex].row == 9))) {
		var candidata = piezas.splice(gSelectedPieceIndex, 1);
		coronar(candidata[0]);
	}
}

function Move(r1, c1, r2, c2) {
	this.fromRow = r1;
	this.fromCol = c1;
	this.toRow = r2;
	this.toCol = c2;
}

function Jump(r1, c1, r2, c2) {
	Move.apply(this, [r1, c1, r2, c2])
}

Jump.prototype = new Move();
Jump.prototype.constructor = Move;

function isThereAPieceBetweenReinaMove(casilla1, casilla2) {
	var existe = false;
	var i = 0;
	var fila = 0;
	var columna = 0;

	if ((turnoBlancas) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la izquierda
		columna = casilla1.column - 1;
		fila = casilla1.row - 1;
	}
	else if ((turnoBlancas) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la derecha
		columna = casilla1.column + 1;
		fila = casilla1.row - 1;
	}
	else if ((turnoNegras) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la izquierda
		columna = casilla1.column - 1;
		fila = casilla1.row + 1;
	}
	else if ((turnoNegras) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la derecha
		columna = casilla1.column + 1;
		fila = casilla1.row + 1;
	}



	if (enTurno.moviendoEnemigo) {


		if ((turnoNegras) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la izquierda
			columna = casilla1.column - 1;
			fila = casilla1.row - 1;
		}
		else if ((turnoNegras) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la derecha
			columna = casilla1.column + 1;
			fila = casilla1.row - 1;
		}
		else if ((turnoBlancas) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la izquierda
			columna = casilla1.column - 1;
			fila = casilla1.row + 1;
		}
		else if ((turnoBlancas) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la derecha
			columna = casilla1.column + 1;
			fila = casilla1.row + 1;
		}

	}

	while ((i < piezas.length) && (existe == false)) {
		if ((piezas[i].row == fila) && (piezas[i].column == columna)) {
			if (casilla1.color !== piezas[i].color || (casilla1.color === piezas[i].color && enTurno.moviendoEnemigo)) { // No puedes comer fichas de tu mismo color
				existe = true;
				indiceABorrar = i;
				borrarPieza();
			}
			else {
				// alert("No puedes comer fichas de tu mismo color"); 
			}
		}
		i++;
	}
	return existe;
}
function isThereAPieceBetween(casilla1, casilla2) {
	var existe = false;
	var i = 0;
	var fila = 0;
	var columna = 0;

	if ((turnoBlancas) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la izquierda
		columna = casilla1.column - 1;
		fila = casilla1.row - 1;
	}
	else if ((turnoBlancas) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la derecha
		columna = casilla1.column + 1;
		fila = casilla1.row - 1;
	}
	else if ((turnoNegras) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la izquierda
		columna = casilla1.column - 1;
		fila = casilla1.row + 1;
	}
	else if ((turnoNegras) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la derecha
		columna = casilla1.column + 1;
		fila = casilla1.row + 1;
	}


	if (enTurno.moviendoEnemigo) {


		if ((turnoNegras) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la izquierda
			columna = casilla1.column - 1;
			fila = casilla1.row - 1;
		}
		else if ((turnoNegras) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == -2)) { // Hacia arriba a la derecha
			columna = casilla1.column + 1;
			fila = casilla1.row - 1;
		}
		else if ((turnoBlancas) && (casilla2.column - casilla1.column == -2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la izquierda
			columna = casilla1.column - 1;
			fila = casilla1.row + 1;
		}
		else if ((turnoBlancas) && (casilla2.column - casilla1.column == 2) && (casilla2.row - casilla1.row == 2)) { // Hacia abajo a la derecha
			columna = casilla1.column + 1;
			fila = casilla1.row + 1;
		}

	}

	while ((i < piezas.length) && (existe == false)) {
		if ((piezas[i].row == fila) && (piezas[i].column == columna)) {
			if (casilla1.color !== piezas[i].color || (casilla1.color === piezas[i].color && enTurno.moviendoEnemigo)) { // No puedes comer fichas de tu mismo color
				existe = true;
				indiceABorrar = i;
			}
			else {
				alert("No puedes comer fichas de tu mismo color");
			}
		}
		i++;
	}
	return existe;
}

function mostrarMovimiento(casilla1, casilla2, salto) {
	var movimiento = document.createElement("p");
	if (salto) {
		movimiento.innerHTML = "Salto: ( " + casilla1.row + " , " + casilla1.column + " ) --> ( " + casilla2.row + " , " + casilla2.column + " )";
	}
	else {
		movimiento.innerHTML = "( " + casilla1.row + " , " + casilla1.column + " ) --> ( " + casilla2.row + " , " + casilla2.column + " )";
	}
	if (turnoBlancas) {
		document.getElementById("moveBlancas").appendChild(movimiento);
		document.getElementById("esTurno").innerHTML = "Blancas mueven:";
		document.getElementById("esTurno").style.background = "black"
		document.getElementById("changeTurn").value = "Terminar Turno Blancas"
		document.getElementById("esTurno").style.color = "white"
		document.getElementById("esTurno").style.boxShadow = "1px 1px white"
	}
	else {
		document.getElementById("moveNegras").appendChild(movimiento);
		document.getElementById("esTurno").innerHTML = "Negras mueven:";
		document.getElementById("changeTurn").value = "Terminar Turno Negras"
		document.getElementById("esTurno").style.background = "white"
		document.getElementById("esTurno").style.color = "black"
		document.getElementById("esTurno").style.boxShadow = "1px 1px gray"
	}
}

function limpiarMovimientos() {
	document.getElementById("moveNegras").innerHTML = "<h3>Negras</h3>";
	document.getElementById("moveBlancas").innerHTML = "<h3>Blancas</h3>";
	if (turnoBlancas) {
		document.getElementById("esTurno").innerHTML = "Blancas mueven:";
		document.getElementById("changeTurn").value = "Terminar Turno Blancas"
		document.getElementById("esTurno").style.background = "white"
		document.getElementById("esTurno").style.color = "black"
		document.getElementById("esTurno").style.boxShadow = "1px 1px gray"
	}
	else {
		document.getElementById("esTurno").innerHTML = "Negras mueven:";
		document.getElementById("changeTurn").value = "Terminar Turno Negras"

		document.getElementById("esTurno").style.background = "black"
		document.getElementById("esTurno").style.color = "white"
		document.getElementById("esTurno").style.boxShadow = "1px 1px white"
	}
}

function clickOnEmptyCell(cell) {

	if (gSelectedPieceIndex == -1) {
		return;
	}
	// registramos el movimiento inicio 1era parte
// 	if(turnoBlancas){
// 		globales.ultimoMovimientoBlancas.origen=piezas[gSelectedPieceIndex]
// 		globales.ultimoMovimientoBlancas.destino=cell

// 		console.log('ultimoMovimientoBlancas'+JSON.stringify(globales.ultimoMovimientoBlancas.origen))
		
// 	}else if(turnoNegras){
// 		globales.ultimoMovimientoNegras.origen=piezas[gSelectedPieceIndex]
// 		globales.ultimoMovimientoNegras.destino=cell

// 		console.log('ultimoMovimientoNegras'+JSON.stringify(globales.ultimoMovimientoNegras.origen))
	
// }
// registramos el movimiento fin segunda parte 


	// si la pieza es igual a la ultima movida y comio y cantmovimiento >0 y tiene posibilidad de comer otra pieza  
	// si canMovimiento en turno =0
	piezasConsPosibilidadDeEliminar = []
	let piezaSeleccionada = piezas[gSelectedPieceIndex]
	if (piezaSeleccionada instanceof Reina) {

		validarEnemigosReina(piezaSeleccionada.color, { row: piezaSeleccionada.row, column: piezaSeleccionada.column, color: piezaSeleccionada.color })
	} else if (piezaSeleccionada instanceof Casilla) {

		validarEnemigosSerca(piezaSeleccionada.color, { row: piezaSeleccionada.row, column: piezaSeleccionada.column, color: piezaSeleccionada.color })
	}
	let piezaEnPosiblidad = piezasConsPosibilidadDeEliminar.find(Element => (Element.row == piezaSeleccionada.row && Element.column == piezaSeleccionada.column && Element.color == piezaSeleccionada.color))
	//  debugger



	// fase 2 moviendo enemigo inicio 
	if (enTurno.moviendoEnemigo) {
		let colorTUrno = turnoBlancas ? kBlancas : kNegras;
		if ((enTurno.cantMovimientos == 0 && piezaEnPosiblidad != undefined) || (enTurno.cantMovimientos > 0 && enTurno.ultimaPiezaMovida != null && piezaEnPosiblidad != undefined) && colorTUrno != piezaSeleccionada.color) { // debo estar moviendo una pieza de diferente color 


			if (enTurno.cantMovimientos == 0 ||
				((piezas[gSelectedPieceIndex].row == enTurno.ultimaPiezaMovida.row
					&& piezas[gSelectedPieceIndex].column == enTurno.ultimaPiezaMovida.column
					&& piezas[gSelectedPieceIndex].color == enTurno.ultimaPiezaMovida.color)
					&& piezaElimino && enTurno.cantMovimientos > 0 &&
					((piezaSeleccionada instanceof Reina && piezaEnPosiblidad != undefined) ||
						(piezaSeleccionada instanceof Casilla && piezaEnPosiblidad != undefined))

				)
			) {




				var pieza = piezas[gSelectedPieceIndex];
				if (pieza instanceof Reina) {
					// Si la pieza es una Reina, usamos la función moverReina
					if (moverReina(pieza, cell.row, cell.column)) {
						// Si el movimiento es exitoso, actualizamos la posición de la pieza
						isThereAPieceBetweenReinaMove(pieza, cell)
						pieza.row = cell.row;
						pieza.column = cell.column;
						enTurno.cantMovimientos++;
						// Aquí puedes agregar cualquier otra lógica que necesites después de mover la pieza


						//  si la pieza tiene posibilidad de eliminar continuamos matando de resto no 
						validarEnemigosReina(pieza.color, { row: cell.row, column: cell.column, color: pieza.color })
						let enPosiblidad = piezasConsPosibilidadDeEliminar.find(Element => (Element.row == cell.row && Element.column == cell.column && Element.color == pieza.color))
						if (enPosiblidad != undefined && piezaElimino) {

							enTurno.moviendoEnemigo = true;
						} else {
							enTurno.moviendoEnemigo = false;
							enTurno.cantMovimientos = 0;
						}


						drawBoard()
					}
				} else {
					var direccion = 1;
					if (piezas[gSelectedPieceIndex].color == kBlancas)
						direccion = -1;

					var rowDiff = direccion * (cell.row - piezas[gSelectedPieceIndex].row);
					var columnDiff = direccion * (cell.column - piezas[gSelectedPieceIndex].column);
					if ((Math.abs(rowDiff) == 2 && Math.abs(columnDiff) == 2) &&
						isThereAPieceBetween(piezas[gSelectedPieceIndex], cell) && ((piezas[gSelectedPieceIndex].color == kBlancas && piezas[gSelectedPieceIndex].row > cell.row) || (piezas[gSelectedPieceIndex].color == kNegras && piezas[gSelectedPieceIndex].row < cell.row) || piezas[gSelectedPieceIndex] instanceof Reina)   //  && (legalMoves[0] instanceof Jump) 
					) {
						/* this was a valid jump */
						if (!gSelectedPieceHasMoved) {
							gMoveCount += 1;
						}

						isThereAPieceBetween(piezas[gSelectedPieceIndex], cell)
						// Mostramos el movimiento hecho
						mostrarMovimiento(piezas[gSelectedPieceIndex], cell, true);

						piezas[gSelectedPieceIndex].row = cell.row;
						piezas[gSelectedPieceIndex].column = cell.column;

						let colorpieza = piezas[gSelectedPieceIndex].color;
						enTurno.ultimaPiezaMovida = piezas[gSelectedPieceIndex];
						enTurno.cantMovimientos++;


						if (indiceABorrar > gSelectedPieceIndex) {	// Para evitar colisiones y fallos en los �ndices de las piezas. 
							borrarPieza();
						}
						else {

							borrarPieza();
						}
						comprobarCoronacionPostKill({ row: cell.row, column: cell.column, color: colorpieza });

						//  si la pieza tiene posibilidad de eliminar continuamos matando de resto no 
						//  validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
						//  let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
						//     if(enPosiblidad!=undefined && piezaElimino)
						//      {

						//         enTurno.moviendoEnemigo=true;
						// 	}else{
						// 		enTurno.moviendoEnemigo=false;
						// 		enTurno.cantMovimientos=0;

						//      }


						drawBoard();

						gNumMoves = 0;

						gSelectedPieceIndex = -1;
						gSelectedPieceHasMoved = false;
						limpiarMovimientos()
						// drawBoard();
						setPiecesStyles()
						return;
					}

				}
			}
			drawBoard();
			return;
		} else {
			// reiniciamos las variables generadas por manipulacion del enemigo 
			enTurno.cantMovimientos = 0;
			// gSelectedPieceIndex = -1;
			gSelectedPieceHasMoved = false;
			gNumMoves = 0;
			enTurno.moviendoEnemigo = false;
			limpiarMovimientos()
			drawBoard()

		}
	}
	// fase 2 moviendo enemigo final


	if (enTurno.cantMovimientos == 0 ||
		((piezas[gSelectedPieceIndex].row == enTurno.ultimaPiezaMovida.row
			&& piezas[gSelectedPieceIndex].column == enTurno.ultimaPiezaMovida.column
			&& piezas[gSelectedPieceIndex].color == enTurno.ultimaPiezaMovida.color)
			&& piezaElimino && enTurno.cantMovimientos > 0 &&
			((piezaSeleccionada instanceof Reina && piezaEnPosiblidad != undefined) ||
				(piezaSeleccionada instanceof Casilla && piezaEnPosiblidad != undefined))

		)
	) {


		// registramos el movimiento inicio

			if(turnoBlancas){
					globales.ultimoMovimientoBlancas.origen={...piezas[gSelectedPieceIndex]}
					globales.ultimoMovimientoBlancas.destino={...cell}
					console.log('ultimoMovimientoBlancas destino'+JSON.stringify(globales.ultimoMovimientoBlancas.destino))
					
				}else if(turnoNegras){
					globales.ultimoMovimientoNegras.origen={...piezas[gSelectedPieceIndex]}
					globales.ultimoMovimientoNegras.destino={...cell}
					console.log('ultimoMovimientoNegras destino'+JSON.stringify(globales.ultimoMovimientoNegras.destino))

			}
		// registramos el movimiento fin



		var pieza = piezas[gSelectedPieceIndex];
		if (pieza instanceof Reina) {
			// Si la pieza es una Reina, usamos la función moverReina
			if (moverReina(pieza, cell.row, cell.column)) {
				// Si el movimiento es exitoso, actualizamos la posición de la pieza
				isThereAPieceBetweenReinaMove(pieza, cell)
				pieza.row = cell.row;
				pieza.column = cell.column;

				clickOnPieceAgain(pieza)

				enTurno.cantMovimientos++;
				// Aquí puedes agregar cualquier otra lógica que necesites después de mover la pieza


				drawBoard()
			}
		} else {
			// Aquí va el resto de tu lógica para mover piezas que no son Reinas
			var direccion = 1;
			if (piezas[gSelectedPieceIndex].color == kBlancas)
				direccion = -1;

			var rowDiff = direccion * (cell.row - piezas[gSelectedPieceIndex].row);
			var columnDiff = direccion * (cell.column - piezas[gSelectedPieceIndex].column);
			if ((rowDiff == 1 && Math.abs(columnDiff) == 1) && (!(legalMoves[0] instanceof Jump))) {
				/* we already know that this click was on an empty square,
				so that must mean this was a valid single-square move */

				if (piezaElimino) {

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []
				} else {
					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []
					validarTodosEnemigosQuePuedenEliminar()

				}
				// Mostramos el movimiento hecho
				mostrarMovimiento(piezas[gSelectedPieceIndex], cell, false);

				piezas[gSelectedPieceIndex].row = cell.row;
				piezas[gSelectedPieceIndex].column = cell.column;

				let colorpieza = piezas[gSelectedPieceIndex].color;

				enTurno.ultimaPiezaMovida = piezas[gSelectedPieceIndex];
				enTurno.cantMovimientos++;
				reporducir('movidasound')

				comprobarCoronacion();
				clickOnPieceAgain(piezas[gSelectedPieceIndex])





				// setTimeout(() => {
				//  si la pieza tiene posibilidad de eliminar esperamos de resto no 
				//  validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
				//  let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
				//     if(enPosiblidad!=undefined && piezaElimino)
				//      {

				//          ultimoMovimiento=new Date().getTime()
				//      }else{
				//          ultimoMovimiento=undefined ;
				//          cambioTurno(); 
				//      }

				gNumMoves += 1;
				drawBoard();
				limpiarMovimientos()

				// }, 2000);
				gMoveCount += 1;
				gSelectedPieceIndex = -1;
				gSelectedPieceHasMoved = false;
				drawBoard();
				// gNumMoves += 1;
				comprobarTablas();
				return;
			}
			else if ((rowDiff == 1 && Math.abs(columnDiff) == 1) && (legalMoves[0] instanceof Jump)) {

				if (piezaElimino) {

					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []
				} else {
					piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []
					validarTodosEnemigosQuePuedenEliminar()

				}

				// Mostramos el movimiento hecho
				mostrarMovimiento(piezas[gSelectedPieceIndex], cell, true);

				piezas[gSelectedPieceIndex].row = cell.row;
				piezas[gSelectedPieceIndex].column = cell.column;
				reporducir('movidasound')
				comprobarCoronacion()
				let colorpieza = piezas[gSelectedPieceIndex].color;
				enTurno.ultimaPiezaMovida = piezas[gSelectedPieceIndex];
				enTurno.cantMovimientos++
				clickOnPieceAgain(piezas[gSelectedPieceIndex])



				drawBoard();
				// setTimeout(() => {
				// cambioTurno(); 
				gNumMoves = 0;
				//  si la pieza tiene posibilidad de eliminar esperamos de resto no 
				//  validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
				//  let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
				//       if(enPosiblidad!=undefined && piezaElimino)
				//      {

				//          ultimoMovimiento=new Date().getTime()
				//      }else{
				//          ultimoMovimiento=undefined ;
				//          cambioTurno(); 
				//      }




				gSelectedPieceIndex = -1;
				gSelectedPieceHasMoved = false;
				// }, 2000);
				limpiarMovimientos()

				saltosDelete = true;
				return;
			}
			else if ((Math.abs(rowDiff) == 2 && Math.abs(columnDiff) == 2) &&
				isThereAPieceBetween(piezas[gSelectedPieceIndex], cell) && ((piezas[gSelectedPieceIndex].color == kBlancas && piezas[gSelectedPieceIndex].row > cell.row) || (piezas[gSelectedPieceIndex].color == kNegras && piezas[gSelectedPieceIndex].row < cell.row) || piezas[gSelectedPieceIndex] instanceof Reina)   //  && (legalMoves[0] instanceof Jump) 
			) {
				/* this was a valid jump */
				if (!gSelectedPieceHasMoved) {
					gMoveCount += 1;
				}

				// Mostramos el movimiento hecho
				mostrarMovimiento(piezas[gSelectedPieceIndex], cell, true);

				piezas[gSelectedPieceIndex].row = cell.row;
				piezas[gSelectedPieceIndex].column = cell.column;
				// comprobarCoronacion()
				let colorpieza = piezas[gSelectedPieceIndex].color;
				enTurno.ultimaPiezaMovida = piezas[gSelectedPieceIndex];
				enTurno.cantMovimientos++;


				if (indiceABorrar > gSelectedPieceIndex) {	// Para evitar colisiones y fallos en los �ndices de las piezas. 
					borrarPieza();
				}
				else {
					// comprobarCoronacion();
					borrarPieza();
				}
				comprobarCoronacionPostKill({ row: cell.row, column: cell.column, color: colorpieza });
				clickOnPieceAgain({ row: cell.row, column: cell.column, color: colorpieza })


				// Actualizamos el contador de los movimientos de tablas, borramos y damos turno al otro jugador. 
				drawBoard();
				// setTimeout(() => {
				// cambioTurno(); 
				gNumMoves = 0;
				//  si la pieza tiene posibilidad de eliminar esperamos de resto no 
				// validarEnemigosSerca(colorpieza,{row:cell.row , column:cell.column ,color:colorpieza })
				// let enPosiblidad= piezasConsPosibilidadDeEliminar.find(Element=>(Element.row==cell.row && Element.column==cell.column && Element.color==colorpieza  ))
				//     if(enPosiblidad!=undefined && piezaElimino)
				//     {

				//         ultimoMovimiento=new Date().getTime()
				//     }else{
				//         ultimoMovimiento=undefined ;
				//         cambioTurno(); 
				//     }


				// }, 2000);
				// De momento, esto es as� hasta que se puedan hacer saltos en cadena. 

				gSelectedPieceIndex = -1;
				gSelectedPieceHasMoved = false;
				limpiarMovimientos()
				// drawBoard();
				setPiecesStyles()
				return;
			}
			gSelectedPieceIndex = -1;
			gSelectedPieceHasMoved = false;

			drawBoard();
			// ...

			
			
		}
		

	}

}

// click de nuevo en la pieza si comio y tiene posibilidad de eliminar
function clickOnPieceAgain(piezaSeleccionada){
	
	inicializarCountRegresiva()
setTimeout(() => {
	

	//al comer multiples no tenga que hacer click de nuevo
		// si la pieza es igual a la ultima movida y comio y cantmovimiento >0 y tiene posibilidad de comer otra pieza  
	// si canMovimiento en turno =0
	

	if (piezaSeleccionada instanceof Reina) {

		validarEnemigosReina(piezaSeleccionada.color, { row: piezaSeleccionada.row, column: piezaSeleccionada.column, color: piezaSeleccionada.color })
	} else  {

		validarEnemigosSerca(piezaSeleccionada.color, { row: piezaSeleccionada.row, column: piezaSeleccionada.column, color: piezaSeleccionada.color })
	}
	let piezaEnPosiblidad = piezasConsPosibilidadDeEliminar.find(Element => (Element.row == piezaSeleccionada.row && Element.column == piezaSeleccionada.column && Element.color == piezaSeleccionada.color))
	
	


		if(piezaElimino && piezaEnPosiblidad) {
			let indiceReseleccion =piezas.findIndex((element)=>(element.row==piezaEnPosiblidad.row && element.column==piezaEnPosiblidad.column && element.color==piezaEnPosiblidad.color))
			clickOnPiece(indiceReseleccion)
			countStartTurno()
			
		}	else{
			cambioTurno()
		}
	}, 300);
}

function inicializarCountRegresiva(){
	clearInterval(globales.intervalCountTurno)//paramos la cuenta regresiva
	// inicializamos cuenta regresiva 
	enTurno.tiempoRestante = initialVariables.tiempoRestante
	document.getElementById('tiempoRestante').innerText = enTurno.tiempoRestante
	fadeOut(document.getElementsByClassName("container_contador")[0])



}

function comprobarTablas() {
	if ((gNumMoves >= 50) || (acuerdoTablas)) {
		sonTablas = true;
		endGame();
	}
}

function cambioTurno() {
	// debugger
	if (turnoBlancas) {
		turnoBlancas = false;
		turnoNegras = true;
		document.getElementById("lienzo").style.boxShadow = "0rem 0rem 14px 7px black"

		// debo limpiar el ultimoMovimientoNegras 
		globales.ultimoMovimientoNegras.origen=null
		globales.ultimoMovimientoNegras.destino=null

	}
	else {
		turnoBlancas = true;
		turnoNegras = false;
		document.getElementById("lienzo").style.boxShadow = "0rem 0rem 14px 7px white"

		// debo limpiar el ultimoMovimientoBlancas 
		globales.ultimoMovimientoBlancas.origen=null
		globales.ultimoMovimientoBlancas.destino=null
		
	}
	piezasConsPosibilidadDeEliminar = [];
	piezaElimino = false;
	saltosDelete = false;

	enTurno.tiempoRestante = initialVariables.tiempoRestante
	enTurno.cantMovimientos = 0;
	enTurno.ultimaPiezaMovida = null;
	gSelectedPieceIndex = -1
	limpiarMovimientos();
	drawBoard();
// reporducir('turnochangesound')

document.getElementsByClassName("contenedor-soplar-mover")[0].style["display"] = "none"


if(globales.socket_accion_recibida==false){

	let data={
		gMoveCount,
		current_sala_id:localStorage.getItem("current_sala_id")
	}
	emitirCambioTurnoSalaSocket(data)
}
}

function borrarPieza() {
	piezas.splice(indiceABorrar, 1);
	indiceABorrar = -1;
	gNumPieces--;
	saltosDelete = false;
	piezaElimino = true

	enTurno.tiempoRestante = initialVariables.tiempoRestante
	piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo = []

	reporducir('comidasound')
}

function gestorClick(e) {
	var casilla = getCursorPosition(e);
	for (var i = 0; i < gNumPieces; i++) {
		if ((piezas[i]?.row == casilla.row) &&
			(piezas[i]?.column == casilla.column)) {
			clickOnPiece(i);
			return;
		}
	}
	clickOnEmptyCell(casilla);
}
function FnitemMover(indicePieza) {

	// si la pieza con el indice es de color negro ,tendre que devolver el movimiento del color negro registrado
	if(piezas[indicePieza].color==kNegras && globales.ultimoMovimientoNegras.origen!=null && globales.ultimoMovimientoNegras.destino!=null){
			devolverMovimiento(globales.ultimoMovimientoNegras.origen,globales.ultimoMovimientoNegras.destino)
	}else if(piezas[indicePieza].color==kBlancas && globales.ultimoMovimientoBlancas.origen!=null && globales.ultimoMovimientoBlancas.destino!=null){
		devolverMovimiento(globales.ultimoMovimientoBlancas.origen,globales.ultimoMovimientoBlancas.destino)
}
	// si la pieza con el indice es de color blanco ,tendre que devolver el movimiento del color blanco registrado



	enTurno.moviendoEnemigo = true;
	gSelectedPieceIndex = indicePieza;
	document.getElementsByClassName("contenedor-soplar-mover")[0].style["display"] = "none"
	gSelectedPieceHasMoved = false;
	drawBoard();
}
function FnitemSopla(itemSoplar) {
	piezas.splice(itemSoplar, 1);

	enTurno.moviendoEnemigo = false;
	gSelectedPieceIndex = -1;
	gSelectedPieceHasMoved = false;
	limpiarMovimientos();
	drawBoard();
	document.getElementsByClassName("contenedor-soplar-mover")[0].style["display"] = "none"

	reporducir('soplarsound')

}
function clickOnPiece(indicePieza) {
if(globales.espectador){
	alert("No puedes mover ninguna ficha ya que eres un espectador en esta sala")
}else{
	// fase 2 moviendo enemigo inicio 

	let piezaIdentificada2 = piezasConsPosibilidadDeEliminarTurnoAnteriorEnemigo.find(Element => (Element.row == piezas[indicePieza].row && Element.column == piezas[indicePieza].column && Element.color == piezas[indicePieza].color))
	if (piezaIdentificada2 != undefined && (((turnoBlancas) && (piezas[indicePieza].color == kNegras)) || ((turnoNegras) && (piezas[indicePieza].color == kBlancas)))) {


		document.getElementsByClassName("contenedor-soplar-mover")[0].style["display"] = "block"
		document.getElementById("itemMover").setAttribute("onclick", "FnitemMover(" + indicePieza + ")")
		document.getElementById("itemSoplar").setAttribute("onclick", "FnitemSopla(" + indicePieza + ")")

		return;
	}
	// fase 2 moviendo enemigo final



	if (((turnoBlancas) && (piezas[indicePieza].color == kBlancas)) || ((turnoNegras) && (piezas[indicePieza].color == kNegras))) {
		if (turnoBlancas && piezas[indicePieza].color == kNegras) {
			alert("No es tu turno");
			return;
		}
		if (turnoNegras && piezas[indicePieza].color == kBlancas) {
			alert("No es tu turno");
			return;
		}

		if (gSelectedPieceIndex === indicePieza) {
			return;
		}
		gSelectedPieceIndex = indicePieza;
		gSelectedPieceHasMoved = false;
		drawBoard();
		// Obtener movimientos posibles para la pieza seleccionada
		// var possibleMoves = getPossibleMovesForPiece(piezas[indicePieza]);
		// Si hay movimientos disponibles, actualizar el estado del juego
		// if (possibleMoves.length > 0) {
		// 	// Guardar los movimientos posibles en una variable global
		// 	legalMoves = possibleMoves;
		// }
	} else {
		alert("No es tu turno");
	}
	}
}
// function clickOnPiece(indicePieza){
// 	if (((turnoBlancas) && (piezas[indicePieza].color==kBlancas)) || ((turnoNegras) && (piezas[indicePieza].color==kNegras))){
// 		if (gSelectedPieceIndex == indicePieza) {
// 			return; 
// 		}
// 		gSelectedPieceIndex = indicePieza;
// 		gSelectedPieceHasMoved = false;
// 		drawBoard();
// 	}
// 	else if((turnoBlancas) && (piezas[indicePieza].color!=kBlancas) && (!saltosDelete)){
// 		alert("Este movimiento no se puede realizar");
// 	}else if((turnoNegras) && (piezas[indicePieza].color!=kNegras) && (!saltosDelete)){
// 		alert("Este movimiento no se puede realizar");
// 	}else if(saltosDelete){
// 		indiceABorrar = indicePieza;
// 		borrarPieza();						
// 		drawBoard();

// 		if (turnoBlancas){
// 			turnoBlancas=true; 
// 			turnoNegras=false; 
// 		}
// 		else {
// 			turnoBlancas=false; 
// 			turnoNegras=true; 
// 		}
// 		saltosDelete = false;

// 	}else {
// 		alert("No es tu turno");
// 	}
// }

function peticionTablas() {
	//cambioTurno(); 
	var respuesta = confirm("El otro jugador ha pedido Tablas. Puedes aceptar para terminar la partida o cancelar para continuar.");
	if (respuesta) {
		acuerdoTablas = true;
		comprobarTablas();
	}
	//cambioTurno(); 
}

function iniciarJuego(canvasElement, moveCountElement) {

	gCanvasElement = canvasElement;
	gCanvasElement.width = kPixelWidth;
	gCanvasElement.height = kPixelHeight;
	gCanvasElement.addEventListener("click", gestorClick, false);
	gMoveCountElem = moveCountElement;
	gDrawingContext = gCanvasElement.getContext("2d");

	// Cargar piezas
	loadButton = document.getElementById("loadButton");
	loadButton.onclick = cargarPosiciones;

	// Guardar piezas 
	saveButton = document.getElementById("saveButton");
	saveButton.onclick = guardarPosiciones;

	// Nueva partida
	saveButton = document.getElementById("resetButton");
	saveButton.onclick = newGame;


	// Peticion tablas
	empateButton = document.getElementById("empateButton");
	empateButton.onclick = peticionTablas;

	newGame();
}

function dibujarTablero() {
	for (var i = 0; i < kBoardWidth; i++) {
		for (var j = 0; j < kBoardHeight; j++) {
			// Alternar los colores de los cuadros
			var colorCuadro = (i % 2) ^ (j % 2) ? kColorCuadroClaro : kColorCuadroOscuro;
			gDrawingContext.fillStyle = colorCuadro;
			gDrawingContext.fillRect(i * kPieceWidth, j * kPieceHeight, kPieceWidth, kPieceHeight);
		}
	}
}
