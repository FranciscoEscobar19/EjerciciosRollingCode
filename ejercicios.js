// // En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// // Crea una variable "string", puede contener lo que quieras:
// const nuevaString = "Francisco";

// // Crea una variable numérica, puede ser cualquier número:
// const nuevoNum = 16;

// // Crea una variable booleana:
// const nuevoBool = true;

// // Resuelve el siguiente problema matemático:
// const nuevaResta = 10 - 5 === 5;

// // Resuelve el siguiente problema matemático:
// const nuevaMultiplicacion = 10 * 4 === 40;

// // Resuelve el siguiente problema matemático:
// const nuevoModulo = 21 % 5 === 4.2 ;

// // En los próximos 22 problemas, deberás completar la función.
// // Todo tu código irá dentro de las llaves de la función.
// // Asegúrate que usas "return" cuando la consola te lo pida.
// // Pista: "console.log()" NO fucionará.
// // No cambies los nombres de las funciones.

// function devolverString(str) {
//   // "Return" la string provista: str
//   // Tu código:
//   console.log(str)
//   return (str)
// }
// devolverString("Francisco")

// function suma(x, y) {
//   // "x" e "y" son números
//   // Suma "x" e "y" juntos y devuelve el valor
//   // Tu código:
//   console.log(x+y)
// }
// suma(10, 10)

// function resta(x, y) {
//   // Resta "y" de "x" y devuelve el valor
//   // Tu código:
//  console.log(x-y)
// }
// resta(10, 8)

// function multiplica(x, y) {
//   // Multiplica "x" por "y" y devuelve el valor
//   // Tu código:
//  console.log(x*y)
// }
// multiplica(2,7)

// function divide(x, y) {
//   // Divide "x" entre "y" y devuelve el valor
//   // Tu código:
//   console.log(x/y)

// }
// divide(20,3)

// function sonIguales(x, y) {
//   // Devuelve "true" si "x" e "y" son iguales
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(x===y){
//     console.log(true)
//   } else{
//     console.log(false)
//   }
// }
// sonIguales(3,4)

// function tienenMismaLongitud(str1, str2) {
//   // Devuelve "true" si las dos strings tienen la misma longitud
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if( str1.length === str2.length){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// tienenMismaLongitud("Fran","cony")

// function menosQueNoventa(num) {
//   // Devuelve "true" si el argumento de la función "num" es menor que noventa
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(num<90){
//    console.log (true)
//   }else{
//     console.log(false)
//   }
// }
// menosQueNoventa(60)

// function mayorQueCincuenta(num) {
//   // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(num>50){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// mayorQueCincuenta(40)

// function obtenerResto(x, y) {
//   // Obten el resto de la división de "x" entre "y"
//   // Tu código:
//   console.log(x%y)
// }
// obtenerResto(90,4)

// function esPar(num) {
//   // Devuelve "true" si "num" es par
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(num%2 === 0 ){
//     console.log(true)
//   } else{
//     console.log(false)
//   }
// }
// esPar(40)
// function esImpar(num) {
//   // Devuelve "true" si "num" es impar
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(num%2 === 0 ){
//     console.log(false)
//   } else{
//     console.log(true)
//   }
// }
// esImpar(7)

// function elevarAlCuadrado(num) {
//   // Devuelve el valor de "num" elevado al cuadrado
//   // ojo: No es raiz cuadrada!
//   // Tu código:
//   console.log(num*num)
// }
// elevarAlCuadrado(4)

// function elevarAlCubo(num) {
//   // Devuelve el valor de "num" elevado al cubo
//   // Tu código:
//   console.log(num*num*num)
// }
// elevarAlCubo(4)

// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
//   console.log(
//   Math.pow(num,exponent)
//   )
// }
// elevar (4,2)

// function redondearNumero(num) {
//   // Redondea "num" al entero más próximo y devuélvelo
//   // Tu código:
//   console.log(
//     Math.round(num)
//   )
// }
// redondearNumero(3.5)
// //  DUDA
// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
//   // Tu código:
//   console.log(
//     Math.round(num + 1)
//   )
// }
// redondearHaciaArriba(3.3)

// function numeroRandom() {
//   //Generar un número al azar entre 0 y 1 y devolverlo
//   //Pista: investigá qué hace el método Math.random()
//   console.log(Math.random());
// }
// numeroRandom()

// function esPositivo(numero) {
//   //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
//   //Si el número es positivo, devolver ---> "Es positivo"
//   //Si el número es negativo, devolver ---> "Es negativo"
//   //Si el número es 0, devuelve false
//   if(numero>0){
//     console.log("Es positivo")
//   }else if (numero<0){
//     console.log("Es negativo")
//   }else{
//     console.log("es 0")
//   }
// }
// esPositivo(-3)

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
//   // Ejemplo: "hello world" pasaría a ser "hello world!"
//   // Tu código:
//   console.log(str+"!")
// }
// agregarSimboloExclamacion("Hola")

// function combinarNombres(nombre, apellido) {
//   // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
//   // Ejemplo: "Soy", "Henry" -> "Soy Henry"
//   // Tu código:
//   console.log (nombre,apellido)
// }
// combinarNombres("Francisco","Escobar")

// function obtenerSaludo(nombre) {
//   // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
//   // "Martin" -> "Hola Martin!"
//   // Tu código:
//   console.log("Hola "+nombre+"!")
// }
// obtenerSaludo("Francisco")

// function obtenerAreaRectangulo(alto, ancho) {
//   // Retornar el area de un rectángulo teniendo su altura y ancho
//   // Tu código:
//   console.log(alto*ancho)
// }
// obtenerAreaRectangulo(40, 5)

// function retornarPerimetro(lado) {
//   //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//   //Escribe tu código aquí
//   console.log(lado*4)
// }
// retornarPerimetro(5)

// function areaDelTriangulo(base, altura) {
//   //Desarrolle una función que calcule el área de un triángulo.
//   //Escribe tu código aquí
//   console.log((base*altura)/2)
// }
// areaDelTriangulo(3,3)

// function deEuroAdolar(euro) {
//   //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//   //como parámetro un número de euros y calcule el cambio en dólares.
//   //Escribe tu código aquí
//   console.log(euro*1.20)
// }
// deEuroAdolar(20)

// function esVocal(letra) {
//   //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//   //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
//   //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//   //Escribe tu código aquí
//   if(letra === "A" || letra=== "E" || letra === "I" || letra=== "O" || letra=== "U"){
//     console.log("es vocal")
//   }else{
//     console.log("Dato erroneo"
//     )
//   }
// }
// esVocal("U")

// // No cambies los nombres de las funciones.

// function obtenerMayor(x, y) {
//   // "x" e "y" son números enteros (int).
//   // Devuelve el número más grande
//   // Si son iguales, devuelve cualquiera de los dos
//   // Tu código:
//   if(x>y){
//     console.log(x)
//   }else{
//     console.log(y)
//   }
// }
// obtenerMayor(8,3)

// function mayoriaDeEdad(edad) {
//   //Determinar si la persona según su edad puede ingresar a un evento.
//   //Si tiene 18 años ó más, devolver --> "Allowed"
//   //Si es menor, devolver --> "Not allowed"
//  if(edad>=18){
//   console.log("Allowed")
//  }else{
//   console.log("Not Allowed")
//  }
// }
// mayoriaDeEdad(20)

// function conection(status) {
//   //Recibimos un estado de conexión de un usuario representado por un valor numérico.
//   //Cuando el estado es igual a 1, el usuario está "Online"
//   //Cuando el estado es igual a 2, el usuario está "Away"
//   //De lo contrario, presumimos que el usuario está "Offline"
//   //Devolver el estado de conexión de usuario en cada uno de los casos.
// if(status ===1){
//   console.log("Online")
// }else if( status ===2){
//   console.log("Away")
// }else{
//   console.log("Offline")
// }
// }
// conection(2)

// function saludo(idioma) {
//   // Devuelve un saludo en tres diferentes lenguajes:
//   // Si "idioma" es "aleman", devuelve "Guten Tag!"
//   // Si "idioma" es "mandarin", devuelve "Ni Hao!"
//   // Si "idioma" es "ingles", devuelve "Hello!"
//   // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
//   // Tu código:
//   switch(idioma){
//   case "Aleman":
//     console.log("Guten Tag");
//     break;
//   case "Mandarin":
//     console.log("Ni Hao");
//     break;
//   case "Ingles":
//     console.log("Hello");
//     break;
//   default:
//     console.log("Undefined")
//   }
// }
// saludo("Mandarin")

// function colors(color) {
//   //La función recibe un color. Devolver el string correspondiente:
//   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
//   //En caso que el color recibido sea "red", devuleve --> "This is red"
//   //En caso que el color recibido sea "green", devuleve --> "This is green"
//   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
//   //Caso default: devuelve --> "Color not found"
//   //Usar el statement Switch.
//   switch(color){
//     case "blue":
//       console.log("This is blue")
//       break;
//     case "red":
//       console.log("Tis is red")
//       break;
//     case"green":
//       console.log("This is green")
//       break;
//     case "orange":
//       console.log("This is orange")
//       break;
//     default:
//       console.log("Color not found");
//   }
// }
// colors("blue")

// function esDiezOCinco(numero) {
//   // Devuelve "true" si "numero" es 10 o 5
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(numero === 10 || numero === 5){
//     console.log(true)
//   } else{
//     console.log(false)
//   }
// }
// esDiezOCinco(10)

// function estaEnRango(numero) {
//   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   if(numero<50 && numero>20){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// estaEnRango(10)

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

// function fizzBuzz(numero) {
//   // Si "numero" es divisible entre 3, devuelve "fizz"
//   // Si "numero" es divisible entre 5, devuelve "buzz"
//   // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
//   // De lo contrario, devuelve el numero
//   if( (numero%3 ===0) && (numero%5 ===0)){
//     console.log("fizzbuzz")
//   }else if(numero%5 ===0){
//     console.log("buzz")
//   }else if(numero%3 ===0){
//     console.log("fiiz")
//   }else{
//     console.log (numero)
//   }
// }
// fizzBuzz(15)

// function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos.
//   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
//   // switch(num1, num2, num3){
//   // case (num1>num2 && num1>num3 && num1>0):
//   //   console.log("Numero 1 es mayor y positivo") 
//   //   break;
//   // case (num1<0 || num2<0 ||num3<0):
//   //   console.log("Hay negativos")
//   //   break;
//   // case(num3>num1 && num3>num2):
//   //   console.log(num3+1)
//   //   break;
//   // case(num1===0 || num2===0 || num3===0):
//   //  console.log("error")
//   //  break;
//   // default:
//   //   console.log("Error");
//   // }
//   if(num1>num2 && num1>num3 && num1>0){
//     console.log("Numero 1 es mayor y positivo")
//   } else if(num1<0 || num2<0 ||num3<0){
//     console.log("Hay negativos")
//   } else if(num3>num1 && num3>num2){
//     console.log(num3+1)
//   }else if (num1===0 || num2===0 || num3===0){
//     console.log("error")
//   }else{
//     console.log("Error")
//   }
// }
// operadoresLogicos(1,5,7)

// function esPrimo(numero) {
//   // Devuelve "true" si "numero" es primo
//   // De lo contrario devuelve "falso"
//   // Pista: un número primo solo es divisible por sí mismo y por 1
//   // Pista 2: Puedes resolverlo usando un bucle `for`
//   // Nota: Los números 0 y 1 NO son considerados números primos
// }

// function esVerdadero(valor) {
//   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//   //si su valor es true y “Soy falso” si su valor es false.
//   //Escribe tu código aquí:
//   if (valor <=10){
//     console.log("Soy verdadero");
//   }else{
//     console.log("Soy falso")
//   }
// }
// esVerdadero(3)

// function tablaDelSeis(x) {
//   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   //Escribe tu código aquí
//   for(i=0; i<=10; i++){
//     console.log(
//       x*i
//       )
//   }
// }
// tablaDelSeis(6)

// function tieneTresDigitos(numero) {
//   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//   //Escribe tu código aquí
//   if(numero>=100){
//     console.log("Verdadero")
//   }else{
//     console.log("False")
//   }
// }
// tieneTresDigitos(100)

// function doWhile(numero) {
//   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//   //Retornar el valor final.
//   //Usar el bucle do ... while.
//   do{
//     console.log(numero)
//     numero+=5
//   } while(numero <=40)
// }
// doWhile(5)

// No cambies los nombres de las funciones.

// function devolverPrimerElemento(frutas) {
//   // Devuelve el primer elemento de un array
//   // Tu código:
//   let array= frutas;
//   console.log(array[0])
// }
// let frutas = ["Manzana", "Durazno", "Sandia"]
// devolverPrimerElemento(frutas)

// function devolverUltimoDeArray(lista){
//   let array = lista
//   console.log (array[array.length-1])
// }
// let lista= ["frutas",4, true, 5, "banana"]

// devolverUltimoDeArray(lista)

// function obtenerLargoDelArray(largo) {
//   // Devuelve el largo de un array
//   // Tu código:
// let array = largo;
// console.log( array.length )
// }
// let largo = ["pan", 1, true, false]
// obtenerLargoDelArray(largo)

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

// function agregarItemAlFinalDelArray(comida, elemento) {
//   // Añade el "elemento" al final del array
//   // y devuelve el array
//   // Tu código:
//   let array = comida.push (elemento);
//   console.log (comida)
// }
// let comida = ["Pan", "Queso", "Lechuga"];
// let elemento = ("Papas");
// agregarItemAlFinalDelArray(comida, elemento)


// function agregarItemAlComienzoDelArray(auto, auto2) {
//   // Añade el "elemento" al comienzo del array
//   // y devuelve el array
//   // Pista: usa el método `.unshift`
//   // Tu código:
//   let genera = auto.unshift(auto2);
//   console.log (auto);
// }
// let auto = ["Ford","Fiat","Peugeot"];
// agregarItemAlComienzoDelArray(auto, "BMW")

// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras estén concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu código:
//   let frase = palabras;
//   console.log(frase[0] +" "+ frase[1])
// }
// let palabras=["Francisco", "Escobar"]
// dePalabrasAFrase(palabras)

// function arrayContiene(clubes, elemento) {
//   // Comprueba si el elemento existe dentro de "array"
//   // Devuelve "true" si está, o "false" si no está
//   // Tu código:
//  console.log(clubes.includes(elemento))
// }
// let clubes =["River", "Boca", "CASM"];
// let elemento = "CASM";
// arrayContiene(clubes, elemento)

// function agregarNumeros(numeros) {
//   // "numeros" debe ser un arreglo de enteros (int/integers)
//   // Suma todos los enteros y devuelve el valor
//   // Tu código:
//   for (i=0; i<=numeros.length ; i++){
//     let suma= x +=numeros[i];
//     console.log(suma);
//   }
// }
// let numeros=[2,4,1,7,9];
// let x=0;
// agregarNumeros(numeros)

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

// function numeroMasGrande(numeros) {
//   // "numeros" debe ser una matriz de enteros (int/integers)
//   // Devuelve el número más grande
//   // Tu código:
//   console.log (Math.max (...numeros));
// }
// numeroMasGrande([1,4,7,9,3]) 

// function multiplicarArgumentos(x,y) {
//   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
//   // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
//   // Escribe tu código aquí:
//   console.log (arguments[0]*arguments[1])
// }
// multiplicarArgumentos(2,6)

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
}

// function diaDeLaSemana(numeroDeDia) {
//   //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
//   //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//   //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
//   //Escribe tu código aquí
//   switch(numeroDeDia){
//     case (7):
//       console.log("Es fin de semana")
//       break;
//     case (1):
//       console.log("Es fin de semana")
//       break;
//     case (2):
//       console.log("Es dia laboral")
//       break;
//     case (3):
//       console.log("Es dia laboral")
//       break;
//     case (4):
//       console.log("Es dia laboral")
//       break;
//     case (5):
//       console.log("Es dia laboral")
//       break;
//     case (6):
//       console.log("Es dia laboral")
//       break;
//     default:
//       console.log("Ingrese nuevamente el dia de la semana")
//   }
// }
// diaDeLaSemana(1)


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}
