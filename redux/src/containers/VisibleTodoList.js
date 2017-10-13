/**
 * VisibleTodoList
 */
import {connect} from 'react-redux'
import {toggleTodo} from '../stores/actions'
import TodoList from '../components/TodoList'
import {createSelector} from 'reselect'

// const getVisibleTodos = (todos,filter) => {
//   switch(filter){
//     case 'SHOW_ALL':
//       return todos;
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed);
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed);
//   }
// }
//记忆功能的selector
const getVisibleTodos = createSelector([
  (state) => state.todos.present,
  (state) => state.visibilityFilter
],(todos,filter) => {
  console.log("selector启用了");
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
})

const mapStateToProps = (state) => {
  console.log(state.todos.present);
  return {
    //todos:getVisibleTodos(state.todos,state.visibilityFilter)
    todos:getVisibleTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,mapDispatchToProps
)(TodoList);

export default VisibleTodoList















