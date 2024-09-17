//construir nuestro primer BST
//propiedades: value-punteros(2 nodos hijos -left and right)
//criterio de ordenacion de nuevos nodos --> left va el nodo de menor valor -right va el nodo de }mayor
//bredthfirst va necesitar de 2 areglos
//1 areglo para guardar el valor de los nodos recorridos -->secondArray
//1 areglo para guardar los subarboles del nodo superior --> auxArray
let firstArray = [];
let secondArray = [];
let auxArray = [];
class Tree {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }
  formArray(array) {
    this.value = array[0];
    for (let i = 1; i < array.length; i++) {
      this.insert(array[i]);
    }
  }
  insert(data) {
    let firstTree = new Tree();
    firstTree.value = data;
    if (data < this.value) {
      if (this.left === null) {
        this.left = firstTree;
      } else {
        this.left.insert(data);
      }
    } else {
      if (this.right === null) {
        this.right = firstTree;
      } else {
        this.right.insert(data);
      }
    }
    return firstTree;
  }
  getSize() {
    if (this.left === null && this.right === null) {
      return 1;
    } else if (this.left === null) {
      return 1 + this.right.getSize();
    } else if (this.right === null) {
      return 1 + this.left.getSize();
    } else {
      return 1 + this.right.getSize() + this.left.getSize();
    }
  }
  depthFirstForEach(typeOfOrder, funct) {
    if (typeOfOrder === "pre-order") {
      funct(this.value);
      if (this.left && this.left.depthFirstForEach(typeOfOrder, funct)) {
      }
      if (this.right && this.right.depthFirstForEach(typeOfOrder, funct)) {
      }
    }
    if (typeOfOrder === "in-order") {
      if (this.left && this.left.depthFirstForEach(typeOfOrder, funct)) {
      }
      funct(this.value);
      if (this.right && this.right.depthFirstForEach(typeOfOrder, funct)) {
      }
    }
    if (typeOfOrder === "post-order") {
      if (this.left && this.left.depthFirstForEach(typeOfOrder, funct)) {
      }
      if (this.right && this.right.depthFirstForEach(typeOfOrder, funct)) {
      }
      funct(this.value);
    }
    return firstArray;
  }
  breadthFirstForEach(funct, container) {
    if (this.left) {
      container.push(this.left);
    }
    if (this.right) {
      container.push(this.right);
    }
    funct(this.value);
    if (container.length > 0) {
      container.shift().breadthFirstForEach(funct, container);
    }
    return secondArray;
  }
}
function firstOrder(value) {
  firstArray.push(value);
}
function secondOrder(value) {
  secondArray.push(value);
}
const firstTree = new Tree();
firstTree.formArray([8, 6, 4, 10, 9, 11]);
console.log(firstTree.getSize());
console.log(firstTree);
console.log(firstTree.depthFirstForEach("in-order", firstOrder));
// console.log(firstTree.breadthFirstForEach(secondOrder, auxArray));
