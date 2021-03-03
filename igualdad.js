const valorNull = null;
const valorUndefined = undefined;

const number1 = 1;
const number1String = '1';

const boolFalse = false;
const boolTrue = true;

const arr = [];
const obj = {nombre: 'Javier'};
const obj2 = {nombre: 'Javier'};

const obj3 = {nombre: 'Javier', apellido: 'Soto'};
const obj4 = {apellido: 'Soto', nombre: 'Javier'};

// cuando se usa la abstraccion de igualdad o bien la igualdad debil
// JS no compara los tipos entre sus valores y en su lugar lo que hace
// es algo lamado la coercion de tipos en la que JS intenta convertir el tipo
// de los alguno de los valores para hacer la comparacion y es donde
// incluso puede entrar otro concepto como lo son los valores truly y falsy
//se recomienda solamente usarlo cuando se va a comparar con undefined
// ya que si se compara algo con estos de modo estricto nos dara false
console.log("Empiezan las comparaciones con igualdad debil");
console.log('number1 == number1String :>> ', number1 == number1String);
console.log('valorUndefined == undefined :>> ', valorNull == undefined);
console.log('boolFalse == false :>> ', boolFalse == false);
console.log('boolFalse == 0 :>> ', boolFalse == 0);
console.log('boolFalse == "0" :>> ', boolFalse == '0');
console.log('boolTrue == true :>> ', boolTrue == true);
console.log('boolTrue == 1 :>> ', boolTrue == 1);
console.log('boolTrue == "1" :>> ', boolTrue == '1');
console.log('arr == 0 :>> ', arr == 0);
console.log('arr == [] :>> ', arr == []);
console.log('arr == "0" :>> ', arr == "0");
console.log('obj == obj2 :>> ', obj == obj2);


console.log("------------------------------------------------------------");
//con la igualdad estricta no solamente se comparan los valores sino que tambien
//se comparan sus tipos, es recomendale siempre hacer uso de este operador ya que 
//por lo mencionado en el punto anterior se puede llegar a tener resultados inesperados
console.log("Empiezan las comparaciones con igualdad debil");
console.log('number1 === number1String :>> ', number1 === number1String);
console.log('valorUndefined === undefined :>> ', valorNull === undefined);
console.log('boolFalse === false :>> ', boolFalse === false);
console.log('boolFalse === 0 :>> ', boolFalse === 0);
console.log('boolFalse === "0" :>> ', boolFalse === '0');
console.log('boolTrue === true :>> ', boolTrue === true);
console.log('boolTrue === 1 :>> ', boolTrue === 1);
console.log('boolTrue === "1" :>> ', boolTrue === '1');
console.log('arr === 0 :>> ', arr === 0);
console.log('arr === [] :>> ', arr === []);
console.log('arr === "0" :>> ', arr === "0");
console.log('obj === obj2 :>> ', obj === obj2);


console.log("------------------------------------------------------------");

//como se puede ver en consola, aunque se comparen dos objetos que son iguales
//realmente no se estan comparando sus valores si no la referencia en memoria, los
// cuales son diferentes, lo que puede ser una solucion es usar JSON.stringify
//aqui no tiene importancia si usamos igualdad debil o estricta.
console.log(
  'comparacion de objetos con JSON.stringify obj y obj2 :>> ', 
  JSON.stringify(obj) === JSON.stringify(obj2)
);
//el problema viene cuando contamos con mas propiedades y por alguna razon no estan 
//acomodadas de la misma forma, dara false
console.log(
  'comparacion de objetos con JSON.stringify obj3 y obj4 :>> ', 
  JSON.stringify(obj3) === JSON.stringify(obj4)
);
//es por eso que para cumplir estas tareas la mejor solucion seria la recursion
//para verificar cada campo y cada objeto o arreglo que se encuentre adentro o bien 
//el uso de librerias como lodash