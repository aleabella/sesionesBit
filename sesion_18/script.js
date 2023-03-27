
/*
//For
for( inicializacion; condicion; actualizacion ){
  //todo lo que tenga
  //aquí adentro
}
//While
while( condicion ){
  //todo lo que yo quiera
  //otra instrucción
}
//Do While
do{
  //instruccion1
  //instruccion2
  //instruccion3
}while( condicion )
*/

//---------------

//slice
// string.slice(startIndex, endIndex)
/*
var texto = "Hola este es un texto";
var palabra;

palabra = texto.slice(5); //devuelve la subcadena comenzando desde la posición 5
palabra = texto.slice(5, 9); //devuelve la subcadena comenzando desde la pos. 5 hasta la posicion 9
palabra = texto.slice(-5); //devuelve la subcadena comenzando desde el final, contando 5 posiciones

document.write(palabra);
*/

//Según un texto ingresado por el usario, determinar cuántas letras a (mayúsculas o minúsculas) existen.
// for, while, .lenght, .toUpperCase(), .toLowerCase(), i

//Según un texto ingresado por el usuario, mostrar el texto pero de forma inversa.
//Ej: texto ingresado: hola mundo
//    texto a mostrar: odnum aloh

//Según un texto ingresado por el usuario, cambiar las:
// - a por 4
// - e por 3
// - i por 1
// - o por 0
/*
inputUser = prompt("Ingresa una frase:").toLocaleLowerCase;
output = "";
var letra = "";

for (let index = 0; index <= inputUser.length; index++) {
  console.log(index);
  letra = inputUser.slice(1, 2);
  console.log(letra);
  switch (letra) {
    case "a":
      output += "4";
      break;
    case "e":
      output += "3";
      break;
    case "i":
      output += "1";
      break;
    case "o":
      output += "0";
      break;

    default:
      output += letra;
      break;
  }
}

console.log(output);
*/
var num = parseInt(prompt("ingresa un número"));
var par =0;

for(var i=0; i<=num; i++){
    if(i % 2 == 0){
        par++; 
    }
}
 
alert("La cantidad de núm pares son" +par);

/*
2) El usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
*/
//ejercicio resulto
/*
var i;
var mostrar =" ";
var letra= prompt("Ingrese una letra");
var num= parseInt(prompt("ingrese el numero de la cantidad de veces que quiere que la letra se repita"));

for(i=0; i<num; i++)
{
    mostrar += letra;

}

alert(mostrar);
*/

/*
3) Se le solicita al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
*/
//ejercicio resuelto
/*
var suma=0;; 
var cant;
var promedio;

for (cant = 0; cant < 4; cant++)
{
    var numero = parseInt(prompt("Ingrese el número "));
    suma += numero;
}
media = suma/4;
alert("el promedio es " + media);
*/

/*
 Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.
 */
//ejercicio resuelto 
/*
var altura;
var anchura;
var estrella;

altura = parseInt(prompt("Teclea un número de 1 a 10"));
for ( var linea = 0; linea < altura; linea++){
    estrella='';

     for(anchura = 0; anchura <= linea; anchura++){
        estrella += "*";
        }
     console.log( estrella+ "\n");
    
}
*/

/*
Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4
*/
//ejercicio resuelto
