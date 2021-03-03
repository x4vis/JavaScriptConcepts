// El contexto es el objeto que está ejecutando una función
// en un momento específico

const persona = {
  nombre: 'Javier',
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
} 

// de esta forma al momento en que la funcion se ejecuta
// se crea un contexto de ejecucion y es aqui donde se
// determina el valor de this para esta ejecucion de la funcion

persona.saludar();

//de esta forma sigue funcionando igual ya que estamos ejecutando
//la funcion al momento

console.log('------------------------------------------------');
const saludar2 = persona.saludar();

// --------------------------------------------------------------------------------------

//pero que pasa si la funcion la pasamos a la variable y despues
//desde la variable ejecutamos la funcion

console.log('------------------------------------------------');
const saludar3 = persona.saludar;
saludar3(); // esto va a imprimir undefined como nombre

//esto mismo ocurre si tuvieramos un elemento en el dom, al cual
//le agregamos un evento y decimos que ejecute la funcion, tendremos como resultado
// undefined

// Estos dos ultimos ejemplos suceden por que el objeto no contiene this, esto quiere
// que los objetos que estan ejecutando la funcion no son el de el objeto persona, son otros
// como lo son la constante saludar o bien el elemento del dom y ellos no contienen this

//Para resolver estos problemas y que JS no asigne el valor por defecto se tiene que hacer algo
// conocido como enlazamiento o (BINDING), asi asginamos el valor que va a tomar this cuando se ejecute
// la funcion

// Los tipos de binding son los siguientes
// 1.- Lexical Binding (Arrow functions)
// 2.- New Binding (Instanciar Objetos)
// 3.- Explicit Binding (Invocacion Directa)
// 4.- Implicit Binding (Invocacion de Metodo)
// 5.- Default Binding (Invocacion Directa)

// JS va a ir viendo cual aplicar dependiendo:
// - como fue escrita la funcion
// - modificacions desde la creacion
// - el lugar de invocacion

// y el orden es el que se señalo arriba

// EJEMPLOS
// 5.- Default Binding (Invocacion Directa)

// de esta forma si no contamos con la propiedad nombre
// sera undefined, esto es por que la funcion esta suelta,
// es decir que el objeto global la esta ejecutando
// y este no contiene nombre, si usamos stric mode o bien estamos
// si bien es posible que en nuestro codigo podamos hacer uso de los
// import o require entonces, las funciones realmente quedan sueltas y 
// this se vuelve vuelve undefined, es decir que ni siquierea podremos
// acceder al objeto global y para eso es mejor hacer referencia a el si 
// es que queremos verlo

console.log('------------------------------------------------');
function saludarSuelta () {
  console.log(`Hola, me llamo ${this.nombre}`);
  console.log('this :>> ', this);
}

saludarSuelta();

// 4.- Implicit Binding (Invocacion de Metodo)

// para este ejemplo podemos usar el primer ejemplo, es algo que normalmente
// hacemos cuando accedemos con punto a la funcion

const persona2 = {
  nombre: 'Javier',
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
  otraPersona: {
    nombre: 'Pepe',
    saludar: function () {
      console.log(`El nombre de la otra persona es ${this.nombre}`);
    }
  }
} 

// de esta forma el contexto de nuestra funcion sera lo
// que esta del lado izquierdo de la llamada a la funcion
console.log('------------------------------------------------');
persona2.saludar();
persona2.otraPersona.saludar();