import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



const TodoList = props => {
    console.log(props.todos)
    return (
      <div>
        <h3>Todo List goes here!</h3>
        <ul>
          {props.todos.map(todo => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              removeTodo={props.removeTodo}
              receiveTodo={props.receiveTodo}
            />
          ))}
        </ul>
        <TodoForm receiveTodo={props.receiveTodo} />
      </div>
    );
}

export default TodoList