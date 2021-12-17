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

class Cola{
    //Definir constructor, que será el representante de este objeto
    constructor(){
        this.cola = [];
    }
    //METODOS DEL OBJETO "PILA"
    //Agregar un elemento -> necesito saber que elemento agregar
    add(element){
        this.cola.push(element);
        return this.cola;
    }
    //Eliminar un elemento
    delete(){
        return this.cola.shift();
    }
    //Saber el tamaño de la pila (la cantidad de elementos)
    getSize(){
        return this.cola.length;
    }
    //Leer un elemento (el último en haberse agregado)
    getElement(){
        return this.cola[0];
    }
    //Leer todos los elementos
    getElements(){
        console.log(this.cola);
    }
}

class Arbol{
    constructor(node){
        this.node = node;
        this.descendents = [];
    }

    addNode(node){
        this.descendents.push(node);
        return this.descendents;
    }

    addElement(element){
        this.node=element;
        return this.node;
    }
}


