import { todoList } from "..";
import { Todo } from "../classes";

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    
    div.innerHTML = htmlTodo;
    
    // divTodoList

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild ;


}

// Eventos

txtInput.addEventListener('keyup', (event) => {
    //console.log(event);
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {// enter
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );// todo objeto de javascript pasa por referencia, por lo cual, al importar estoy recibiendo la misma informacion
        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
        console.log('agregado');
    }
});


divTodoList.addEventListener('click', (event) => {// etiqueta ul
    console.log('click');
    // console.log(event.target.localName);// propiedad para saber en que parte del divTodoLIst se hizo click
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;// objeto HTML, etiqueta li
    const todoId = todoElemento.getAttribute('data-id');// todoElemento es una etiqueta li
    
    if( nombreElemento.includes('input') ){// click en check que es un input
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');// si ya esta la clase completed en la etiqueta html (a la que hace referencia todoElemento) la quita, si no esta la pone
    } else if( nombreElemento.includes('button') ) {// click en boton x
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
        console.log('eliminado');
    }

    
});

btnBorrar.addEventListener('click',() => {
    todoList.eliminarCompletados();// se eliminan los que estan en check

    for ( let i = divTodoList.children.length - 1; i >= 0 ; i--){

        const elementoLiTodo = divTodoList.children[i];

        if( elementoLiTodo.classList.contains('completed') ){
            divTodoList.removeChild(elementoLiTodo);
        }

    }
});


ulFiltros.addEventListener('click',(event)=>{
    // console.log( event.target.text );
    const filtro = event.target.text;

    if( !filtro ) return;

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');// event.target hace referencia al filtro al que acabamos de hacer click

    for( const elemento of divTodoList.children ){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                if ( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if ( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            

        }
    }
});