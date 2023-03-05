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
