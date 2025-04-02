


document.addEventListener("DOMContentLoaded", function() {
    console.log("Juego listo");
});

function Temporizador(id,inicio,final){
    this.inicio=inicio;
    this.id=id;
    this.final=final;
    this.contador=this.inicio;

    this.conteoSegundos = function(){
        if (this.contador == this.final){
            this.conteoSegundos =null;
            swal(
                'Oops...',
                'Se ha acabado el tiempo!',
                'error'
              )

            // Cuando tiempo llegue a lo ultimo mostrar aleta: 
            //return;
        }
            document.getElementById(this.id). innerHTML= this.contador --;
            setTimeout(this.conteoSegundos.bind(this),1000);
            
        };

    }
   
let temporizador= new Temporizador('temporizador',10,0)
temporizador.conteoSegundos();

 
function iniciar() {
    let filas = 10;
    let columnas = 10;
    let tablero = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement("td");
            celda.id = `celda-${i}-${j}`;
        
            celda.addEventListener("click", () => disparar(i, j)); // Detectar disparos
            fila.appendChild(celda);
        }
        tablero.appendChild(fila);
    }

    let contadorImpactos = document.getElementById("tableroJuego");
    contadorImpactos.innerHTML = "";
    contadorImpactos.appendChild(tablero);

    colocarBarcos();
}

const barcos = [
    { nombre: "Portaaviones", tamanio: 5 },
    { nombre: "Acorazado", tamanio: 4 },
    { nombre: "Crucero", tamanio: 3 },
    { nombre: "Submarino", tamanio: 3 },
    { nombre: "Destructor", tamanio: 2 }
];

let tableroBarcos = Array(10).fill().map(() => Array(10).fill(0)); // Matriz para barcos

function colocarBarcos() {
    barcos.forEach(barco => {
        let colocado = false;
        while (!colocado) {
            let fila = Math.floor(Math.random() * 10);
            let columna = Math.floor(Math.random() * 10);
            let direccion = Math.random() < 0.5 ? "H" : "V";

            if (puedeColocar(tableroBarcos, fila, columna, barco.tamanio, direccion)) {
                for (let i = 0; i < barco.tamanio; i++) {
                    if (direccion === "H") {
                        tableroBarcos[fila][columna + i] = 1;
                    } else {
                        tableroBarcos[fila + i][columna] = 1;
                    }
                }
                colocado = true;
            }
        }
    });
}

function puedeColocar(tablero, fila, columna, tamanio, direccion) {
    if (direccion === "H") {
        if (columna + tamanio > 10) return false;
        for (let i = 0; i < tamanio; i++) {
            if (tablero[fila][columna + i] === 1) return false;
        }
    } else {
        if (fila + tamanio > 10) return false;
        for (let i = 0; i < tamanio; i++) {
            if (tablero[fila + i][columna] === 1) return false;
        }
    }
    return true;
}


let contadorImpactos=0;
let contadorHundidos=0;

function disparar(fila, columna) {
    let celda = document.getElementById(`celda-${fila}-${columna}`);
    if (tableroBarcos[fila][columna] === 1) {
        celda.style.backgroundColor = "red";
        swal("¡Buuum!", "Barco alcanzado"); 
        contadorImpactos++; 
        contadorHundidos++; 
        console.log(contadorImpactos);
        document.getElementById("contadorImpactos").innerHTML=contadorImpactos;
        document.getElementById("contadorHundidos").innerHTML=contadorHundidos;
        //celda.innerText = "💥";
    } else {
        celda.style.backgroundColor = "blue";
        //celda.innerText = "🌊";
    }
}

function tiempo(){
   //(determianr el tiempo de juego)
}