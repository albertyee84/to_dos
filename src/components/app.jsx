import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



const App = () => (
    <div className="app">
        <h1>Super Awesome Todo List</h1>
        <MuiThemeProvider>
            <TodoListContainer />
        </MuiThemeProvider>
    </div>
);

export default App;
