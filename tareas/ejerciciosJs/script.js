/*
1) Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y el programa muestre en una alert la temperatura en grados Fahrenheit.
*/
//ejercicio resuelto
/*
var cel= (parseFloat(prompt("ingrese la temperatura en Celsius")));
var fah=cel*1.8+32;

alert("la temperatura ingredada en Fahrenheir es de: "+fah);
*/
/*
El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
*/
//ejercicio resuelto
/*
//primera opción pero no logre que tuviera espacio
var i, repetir;
var num = parseInt(prompt("ingrese numero entero"))

for (i=0; i<num; i++){
    for (repetir=0; repetir<i; repetir++){
       
        document.write(i);
    }
    document.write("\n");
}
*/
/*
segunda opción
var num = prompt("Introduce un Numero");
 
function piramide(num) {
    for (var i = 0; i < num; i++) {
        for (var z = 1; z >= (i/2)-1; z--) {
            document.write("*");
        }

        for (var x = 0; x <= (i*2)-i; x++) {
            document.write(i+1);
        }

        for (var y = 1; y >= (i/2)-1; y--) {
            document.write("*");

        }

        i+=1;
        document.write("<br>");
    }
}

piramide(num);
*/

/*
3) Según un numero ingresado por el usuario, calcular su factorial
/*
//ejercicio resuelto
/*
const dato = parseInt(prompt("ingrese el número que quiere calcular el factorial"));
var fact = 1;
for(var i = dato; i>0; i--){
    fact *= i;
}

alert("el factorial de "+dato+" es: "+fact);
*/

/*
4) ATM (cajero automático)

Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
  - EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
  - DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - CONSULTAR SALDO: debe mostrar el saldo actual
  - VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
  - SALIR: debe terminar la ejecución del programa*/
//ejercicio resuelto
/*
var pin = 1234;
var cap = 0;
var contador = 0;

var saldo = 3400;
var deposito = 0;
var retiro = 1501;

while (pin != cap) {
    cap = parseInt(prompt("Ingrese PIN (1234)"));
    contador = contador + 1;
    if (contador == 3) {
        break;
    }
    if (contador == 2 && pin != cap) {
        alert("Cuidado solo te resta una oportunidad");
    }
}
if (cap == pin) {
    var opcion = parseInt(prompt("Bienvenido al Sistema" + "\n" + "Opciones" + "\n" + "1. Consulta de Saldo" + "\n" + "2. Retiro" + "\n" + "3. Deposito" + "\n" + "4. Movimientos" + "\n"));

    while (opcion < 1 || opcion > 4) {

        opcion = parseInt(prompt("Lo sentimos esa opción no esta disponible, por favor ingrese la opcion: " + "\n" + "1. Consulta de Saldo" + "\n" + "2. Retiro" + "\n" + "3. Deposito" + "\n" + "4. Movimientos" + "\n"));
    }
    if (opcion == 1) {
        alert("Tu saldo actual es: " + saldo);
        opcion = parseInt(prompt("1. regresar 2. salir"));

        if (opcion == 1) {
            opcion = parseInt(prompt("por favor ingrese la opcion: " + "\n" + "1. Consulta de Saldo" + "\n" + "2. Retiro" + "\n" + "3. Deposito" + "\n" + "4. Movimientos" + "\n"));
        } else {
            alert("Gracias por preferirnos. Hasta la próxima");
        }
    }
    if (opcion == 2) {
        //suponga que el cajero solo tiene billetes de 500, 200,100 y 50 pesos
        //el objetico es entregar la menor catidad de billetes posible
        while (retiro > saldo || retiro == 0 || (retiro % 50) != 0) {
            retiro = parseInt(prompt("Cuanto vas a retirar: "));
        }
        saldo = saldo - retiro;

        alert("Retiraste: " + retiro + " Tu saldo actual es: " + saldo);
        opcion = parseInt(prompt("1. regresar 2. salir"));

        if (opcion == 1) {
            opcion = parseInt(prompt("por favor ingrese la opcion: " + "\n" + "1. Consulta de Saldo" + "\n" + "2. Retiro" + "\n" + "3. Deposito" + "\n" + "4. Movimientos" + "\n"));
        } else {
            alert("Gracias por preferirnos. Hasta la próxima");
        }
    }
    if (opcion == 3) {
        deposito = parseInt(prompt("Cuanto depositas: "));
        saldo = saldo + deposito;

        alert("ingresaste: "+deposito+" Tu saldo actual es: " + saldo);
        alert("Retiraste: " + retiro + " Tu saldo actual es: " + saldo);
        
        opcion = parseInt(prompt("1. regresar 2. salir"));

        if (opcion == 1) {
            opcion = parseInt(prompt("por favor ingrese la opcion: " + "\n" + "1. Consulta de Saldo" + "\n" + "2. Retiro" + "\n" + "3. Deposito" + "\n" + "4. Movimientos" + "\n"));
        } else {
            alert("Gracias por preferirnos. Hasta la próxima");
        }
    }
    if (opcion == 4) {
        alert("Movimientos");
        opcion = parseInt(prompt("1. regresar 2. salir"));
    }

    if (opcion == 1) {
        opcion = parseInt(prompt("por favor ingrese la opcion: " + "\n" + "1. Consulta de Saldo" + "\n" + "2. Retiro" + "\n" + "3. Deposito" + "\n" + "4. Movimientos" + "\n"));
    } else {
        alert("Gracias por preferirnos. Hasta la próxima");
    }
}
else {
    alert("Lo sentimos ha superado el número de intentos.");
}

*/

/*
5) Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34
*/
//ejercicio resuelto
var a = 0, b = 1, c = 0, i = 0;
var num = parseInt(prompt("ingrese la cantidad de veces que quieres calcula la secuencia de Fibonacci en número entero"))
while(i < num) {
    c = a+b;
    b = a;
    a = c;
    document.write(b + "<br/>")
    i++;
}