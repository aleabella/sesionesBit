/* function saludo(nombre) {
  var msj = "Hola " + nombre + ", ¿cómo estás?";
  return msj;
}
var hola;
hola = saludo("Emiliano");
alert(saludo("Juan"));
console.log(saludo("Alejandra"));
console.log(hola);
 */

//SUPER Calculadora
/*
var op = parseInt(
    prompt(
      "Ingrese una opción: \n\n 1) SUMA \n 2) RESTA \n 3) MULTIPLICACIÓN \n 4) DIVISIÓN \n 5) SALIR"
    )
  );
  
  switch (op) {
    case 1:
      //suma
      mostrar_alert(operacion_matematica("suma"));
      break;
  
    case 2:
      //resta
      var x = operacion_matematica("resta");
      mostrar_consola(x);
      break;
  
    case 3:
      //multiplicación
      mostrar_consola(operacion_matematica("multiplicacion"));
      break;
  
    case 4:
      //división
      mostrar_alert(operacion_matematica("division"));
      break;
  
    case 5:
      //salir
      break;
  
    default:
      alert("Ingrese una opción correcta");
      break;
  }
  
  function operacion_matematica(accion) {
    var a = parseFloat(prompt("Ingrese el primer número"));
    var b = parseFloat(prompt("Ingrese el segundo número"));
    var total = 0;
  
    switch (accion) {
      case "suma":
        total = a + b;
        break;
  
      case "resta":
        total = a - b;
        break;
  
      case "multiplicacion":
        total = a * b;
        break;
  
      case "division":
        if (b != 0) {
          total = a / b;
        } else {
          alert("No se puede dividir por 0.");
        }
        break;
    }
  
    //return total; //devuelve la operación matematica realizada
  }
  
  function mostrar_alert(param) {
    alert("El restultado es: " + param);
  }
  
  function mostrar_consola(param) {
    console.log("El resultado es: " + param);
  }
  */
  /*
  Según un texto ingresado por el usuario, van a crear 3 funciones:
  - mayusculas (que reciba un parametro y devuelva eso mismo en mayúsculas)
  - minusculas (que reciba un paramentro y devuelva eso mismo en minúsculas)
  - mostrar (que reciba un parametro y muestre por consola eso mismo)
  Darle a elegir al usuario, como desea transformar el texto (a may o min) y luego se muestra
   */

  var texto = prompt("Ingrese una opción un texto");
  var opcion = parseInt(prompt("Seleccione 1 si quiere que se vea mayuscula o 2 para minúscula"));
  var 
  

  function mayuscula(texto) {
    var a = texto.toUpperCase();
    console.log;
    return a;
    var b = parseFloat(prompt("Ingrese el segundo número"));
    var total = 0;
  
    switch (accion) {
      case "suma":
        total = a + b;
        break;
  
      case "resta":
        total = a - b;
        break;
  
      case "multiplicacion":
        total = a * b;
        break;
  
      case "division":
        if (b != 0) {
          total = a / b;
        } else {
          alert("No se puede dividir por 0.");
        }
        break;
    }
  
    //return total; //devuelve la operación matematica realizada
  }
  
  function mostrar_alert(param) {
    alert("El restultado es: " + param);
  }
  
  function mostrar_consola(param) {
    console.log("El resultado es: " + param);
  }