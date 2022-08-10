import { Todo } from "./todo.class";


export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }


    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
        //this.todos.unshift( todo );
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for( const todo of this.todos ) {
            if( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado );// regresa los todos que su propiedad completado sean false, los que sean true, que estan completados, se van del arreglo
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        //if( localStorage.getItem('todo') ){
        //    this.todos = JSON.parse(localStorage.getItem('todo'));// Asi, son objetos literales, no instancias de la clase Todo
        //} else{
        //    this.todos = [];
        //}

        this.todos = ( localStorage.getItem('todo') ) ? JSON.parse(localStorage.getItem('todo')) : [] ;

        this.todos = this.todos.map(Todo.fromJson);// con map puedo retornar cada uno de sus elementos mutados
    }

}