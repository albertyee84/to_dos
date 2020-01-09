import React, {useState} from 'react';

const TodoListItem = props => {

    let [id, setId] = useState(props.todo.id);
    let [title, setTitle] = useState(props.todo.title);
    let [body, setBody] = useState(props.todo.body);
    let [done, setDone] = useState(props.todo.done);


    const handleRemove = e => {
        e.preventDefault();
        props.removeTodo(props.todo.id)
    }

    const handleUpdate = e => {
        let todo = {id, title, body, done}
        props.receiveTodo(todo);
    }

    async function handleDone(e){
        setDone(!done)
        await handleUpdate();
    }
    let doneButton = props.todo.done ? 'Undo' : 'Done'
    return (
      <div>
        <li>{props.todo.title}</li>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleDone}>{doneButton}</button>
      </div>
    );
}

export default TodoListItem;