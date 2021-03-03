//1.-sintaxis

//2.-nombres de parametros repetidos => si se repetin 
//la funcion tomara el segundo parametro para realizar
//expresion, solamente que se use el strick mode de js
//dara un error por lo parametros repetidos

function suma (x, x) {
  return x + x;
}

//3.-si solamente se retorna una sola expresion 
//las llaves y el return no son necesarios

//4.-los nombre de parametros no se pueden repetir
const suma2 = (x, y) => x + y;
//5.-las arrow functions se puede simplificar aun
//mas si solo se pasa un parametro
const suma3 = x => x + x;

//6.-es permitido el uso de this para las variables o bien propiedades
const me = {
  firstName: "Javier",
  lastName: "Soto",
  fullName(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

// ejemplo con class, la clase por detras sigue siendo una una fucion que 
// se esta construyendo y como esta suelta entonces el contexto es el objeto global
// y este no cuenta con las propiedades de firstname y lastname, es por eso que entonces
// se tendria que hacer uso del constructor para acceder a ellas

///// sin constructor
// class me  {
//   firstName = "Javier";
//   lastName = "Soto";
//   static fullName () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }

// con constructor, esto es posible por que estamos instanciando la clase,
// al instanciarle creamos el contexto y se asignan
// los valores que le pasamos al momento de construirla

// class me  {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   fullName () {
//     console.log(`${this.firstName} ${this.lastName}`);
//     console.log('this :>> ', this);
//   }

// }

//en la version del arrow function no se puede usar el keyword this para propiedades
//dara como resultado un undefined, si se requiere imprimir variables
//dentro del arrow function se necesita tenerlas en su contexto
//si bien this si se puede utilizar este apuntara al objeto de su contexto, en este caso window
const me2 = {
  firstName: "Javier",
  lastName: "Soto",
  fullName: () => {
    let firstName = "Javier";
    let lastName = "Soto";
    console.log(`${firstName} ${lastName}`);
    console.log('this :>> ', this);
  }
}

//en este ejemplo si que se hace uso de this para imprimir las propiedades del objeto
//pero esto es por que la arrow function este definidida dentro del contexto de una funcion
//que hace que este contexto sea el objeto
const me3 = {
  firstName: "Javier",
  lastName: "Soto",
  saludar: function() {
    const fullName = () => {
      console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`);
      console.log('this :>> ', this);
    }

    fullName();
  }
}

//las funciones normales se puede construir y llamar
function suma4 (x, y) {
  console.log(x + y);
}
// OR
const suma5 = new Function('x', 'y', 'console.log(x + y)')


//las arrow functions no se pueden construir
const suma6 = (x, y) => {
  console.log(x + y);
}



// console.log(suma(1, 2))
// console.log(suma2(1, 2))
// console.log(suma3(3));
// me.fullName();
// me = new me('Javier', 'Soto');
// me.fullName();
// me2.fullName();
//me3.saludar();
// new suma4(2, 2)
// suma5(1,2);
// new suma6(1,2)

