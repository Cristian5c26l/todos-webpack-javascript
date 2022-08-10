

export class Todo {

    static fromJson({ id, tarea, completado, creado }) {// recibe un objeto desestructurado
        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( tarea ) {
        this.tarea = tarea;

        this.id = new Date().getTime(); //id guarda una cadena de numeros que es la representacion de la fecha actual, en la hora actual en el momento actual
        this.completado = false;
        this.creado = new Date();
    }

    imprimir() {
        console.log(`todo: ${this.tarea} - ${this.id} `);
    }

}