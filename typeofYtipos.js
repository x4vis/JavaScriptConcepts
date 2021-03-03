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

console.log("------------------------------------------------------------");
//Este operador nos ayuda a examinar el tipo de las valores
console.log("Uso del operador typeof");

//los tipos de datos primitivos tienen 2 caracteristicas
//1.- No contienen ni metodos ni propiedades
console.log("TIPOS PRIMITIVOS");
console.log('typeof number1 :>> ', typeof number1);
console.log('typeof number1String :>> ', typeof number1String);
console.log('typeof valorNull :>> ', typeof valorNull);
console.log('typeof valorUndefined :>> ', typeof valorUndefined);
console.log('typeof boolFalse :>> ', typeof boolFalse);
console.log("TIPOS GENERALES");
console.log('typeof arr :>> ', typeof arr);
console.log('typeof obj :>> ', typeof obj);