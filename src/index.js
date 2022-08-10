
// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import { Todo, TodoList } from './classes';// implicitamente, importa todo lo que se exporta en el archivo index.js de la carpeta classes
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

/*todoList.todos.forEach(todo => {
    crearTodoHtml( todo );
});*/

console.log( 'todoList', todoList );
todoList.todos[0].imprimir();

todoList.todos.forEach(crearTodoHtml);



// const tarea = new Todo('Aprender JavaScript!!');

//todoList.nuevoTodo( tarea );



//crearTodoHtml( tarea );


//localStorage.setItem('mi-key','soy cris');

//setTimeout(() => {
//    localStorage.removeItem('mi-key');
//},1500);// en un segundo y medio, ejecuta esta funcion de flecha
