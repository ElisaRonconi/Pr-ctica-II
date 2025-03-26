
class Barco {
    constructor(nombre, tipo, tamanio) {
      this.nombre= nombre;
      this.tipo = tipo;
      this.tamanio= tamanio;
    }
  }

  class tablero {
    constructor(fila, columna) {
      this.fila= fila;
      this.columna = columna;
    }
  }

  const tipo1=2;
  const tipo2=4;
  const tipo3=5;
  //var saludable=[tipo];

 var i,j;
var filas=10;
var columnas=10;
var res= 5;
document.writeln("<table border>");

function iniciar(){
 for (i=0; i< filas; i++) {
 document.writeln("<tr>");
  for (j=0; j < columnas; j++){
    document.writeln("<td>");
    document.writeln(res);
     
    document.writeln("</td>");
  }
  document.writeln("</tr>");
}
document.writeln("</tables>");


}



 // function asignarBarco(barco) //poner barcos en posiciiones aleatorias random-> en tablero

if (barco=tipo1){
 // dibujar en 2 casilleros
}

function disparar(){}
//Puntos tocados del barco=array booleano con tamaño del barco