/*
Introducir en este archivo las funcionalidades o fragmentos de cogido que se requieren compilar 
*/

// Ejemplo para la compilación de cógido
let my_github = "Juanmahecha9";
let my_name = "Juan David Mahecha";

class Something {
  #property;

  constructor() {
    this.#property = "URL";
  }

  #privateMethod() {
    return `Desarrollado por: ${my_name}, Github: ${my_name}`;
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}
const instance = new Something();

console.log(instance.getPrivateMessage());
