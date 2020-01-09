import { connect } from 'react-redux';
import TodoList from "./todo_list";
import { allTodos } from '../../reducers/selectors'
import {receiveTodo, removeTodo} from '../../actions/todo_actions'

const msp = state => {
    return {
      todos: allTodos(state),
      state
    };
}
    


const mdp = dispatch => {
    return ({
        receiveTodo: todo => dispatch(receiveTodo(todo)),
        removeTodo: todoId => dispatch(removeTodo(todoId))
    })
}

export default connect(msp, mdp)(TodoList)