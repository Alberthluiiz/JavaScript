import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    completed: 'Completed',
    Pending: 'Penfinf'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);    
    console.log('InitStore 🥑');
}


export default{
    initStore,
}