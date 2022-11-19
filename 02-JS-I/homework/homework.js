// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
      return str;
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
    return x + y
}


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  return resta(x - y);
}


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
    return (x * y);
  
}
console.log(multiplica(2, 6));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  return (x / y);
  
}
console.log(divide(10, 2));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  if (x != y) {
    return (true)
  }else {
    return (false)
  }
  
}
sonIguales();
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
   if (str1.lenght === str2.lenght) {
      return true
   }else {
     return false
   }
  
}
tienenMismaLongitud();

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
    if (num < 90) {
      return true;
    }else {
      return false
    }
  
}
console.log(menosQueNoventa(40));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  if (num > 50) {
    return true
  }else {
    return false
  }
  
}
console.log(67);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
   return (x % y);
  
}
console.log(obtenerResto(21, 5));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  if ((num % 2)== 0) {
    return true
  }else {
    return false
  }
  
}
console.log(esPar(4));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  if ((num % 2)!== 0) {
    return true
  }else {
    return false
  }
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  return Math.sqrt(num);
  
}
console.log(elevarAlCuadrado(2));

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
   return num*num*num
  
}
console.log(elevarAlCubo (4));
console.log(elevarAlCuadrado)
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  return Math.round(num);
  
}
console.log(redondearNumero(10.25));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  return Math.ceil(num);
  
}
console.log(redondearHaciaArriba(0.97));
  


function numeroRandom(max) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  return Math.ceil(Math.random() * max); 
}


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if ((Math.sign(numero) == 1)) {
    return `${numero} es positivo`;
  }else if ((Math.sign(numero)== -1)) {
    return `${numero} es negativo`;
  }else {
    return `${numero}es cero`;
  }
}
console.log(esPositivo(-56));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
      console.log(nombre.concat(' ', apellido))
}
combinarNombres("Soy", "Henry");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
   const cadenaNueva = `Hola ${nombre}`;
  console.log(cadenaNueva);
  
}
obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return (alto * ancho);
}
obtenerAreaRectangulo(4, 4);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
    return (lado * 4);
}
retornarPerimetro(5);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return(base * altura);
}
areaDelTriangulo(12, 7);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
    return(euro * 1.20);
  
}
deEuroAdolar(4);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  switch (letra) {
    case "a":
      console.log("Es una Vocal");
      break;
    case "e":
      console.log("Es una Vocal");
      break;
    case "i":
      console.log("Es una Vocal");
      break;
    case "o":
      console.log("Es una Vocal");
      break;
    case "u":
      console.log("Es una Vocal");
      break;
    case "letra.lenght == 2":
      console.log("Dato Incorrecto");
      break;
    default:
      console.log("Dato Incorrecto");
      break;
  }
  
};
esVocal("a"); 



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
