class Pila{
    //Definir el constructor, que sera el representante de este objeto
    constructor(){
        this.pila = [];
    }
    //METODOS DEL OBJETO PILA
    //Agregar un elemento
    add(element){
        this.pila.push(element);
        return this.pila
    }
    //Eliminar un elemento
    delete(){
        return this.pila.pop();
    }
    //Saber el tamaño de la pila(la cantida de elementos)
    getSize(){
        return this.pila.length;
    }
    //Leer un elemento(el último en agregarse)
    getElement(){
        return this.pila[this.pila.length - 1];
    }
    //Leer todos los elementos
    getElements(){
        console.log(this.pila);
    }
}