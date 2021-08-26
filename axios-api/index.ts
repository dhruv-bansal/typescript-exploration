import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1';


interface Todo {

    id: number;
    title: string;
    complete: boolean;
}

axios
    .get(url)
    .then(
        response => {

            const todo = response.data as Todo;
            // const id = Todo.ID; this will give error now
            const id = todo.id;
            const title = todo.title;
            const complete = todo.complete;

            logTodo(id, title, complete)
        });

const logTodo = (id: number, title: string, complete: boolean) => {
    console.log(`
                The todo id : ${id} 
                The todo title : ${title}
                The todo complete : ${complete}
            `);
}