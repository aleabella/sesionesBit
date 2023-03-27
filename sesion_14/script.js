// Estructura condicional (if)
/*
if(¿la luz está encendida?){

}*/
/*
var num=30;
if (num >= 30){
    alert("La variable num es mayor que 30");
} 
*/
/*
Operadores matemáticos/aritméticos
 mayor (>)
 menor (<)
 mayor o igual (>=)
 menor o igual (<=)
 igual (==) OJO CON ESTO!!!!
 distinto ( != )
*/
// var n1 = 12;
// var n2 = 10;

// //mayor
// if (n1 > n2) {
//   alert("n1 es mayor que n2");
// }

// //menor
// if (n1 < n2) {
//   alert("n1 es menor que n2");
// }

// //mayor o igual
// if (n1 >= n2) {
//   alert("n1 es mayor o igual que n2");
// }

// //menor o igual
// if (n1 <= n2) {
//   alert("n1 es menor o igual que n2");
// }

// //igual
// if (n1 == n2) {
//   alert("n1 y n2 son iguales");
// }

// //distintos
// if (n1 != n2) {
//   alert("n1 y n2 son distintos");
// }
/*
var encendido = false;

if (encendido == true) {
  //alert("La lámpara está encendida");
}

var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  alert("numero1 NO es mayor a numero2");
}
if (numero2>=0){
    alert("número2 es positivo");
}
if (numero1!=0){
    alert("numero1 es negativo o distinto de cero");
}
if(numero1 +1 <=numero2){
    alert("incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}*/
var num1 = parseFloat(prompt("ingrese num1")); 
var num2 = parseFloat(prompt("ingres num 2 diferente a cero"));

if(num2 ==0){
    alert("no se puede dividir por cero")
    
} else {
    var total = num1/num2;
    alert("el resultado es: "+total);
}