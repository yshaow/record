/**
 * App容器组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../stores/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import {createSelector} from 'reselect'
import UndoRedo from './UndoRedo'

class App extends React.Component{
  render(){
    const {dispatch,visibleTodos,visibilityFilter} = this.props
    return (
      <div>
        <AddTodo
          onAddClick = {
            text => dispatch(addTodo(text))
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick = {
            index => dispatch(completeTodo(index))
          }
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange = {
            nextFilter => dispatch(setVisibilityFilter(nextFilter))
          }
        />
        <UndoRedo />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter:PropTypes.oneOf([
    "SHOW_ALL",
    "SHOW_COMPLETED",
    "SHOW_ACTIVE"
  ]).isRequired
}

// function selectTodos(todos,filter){
//   switch(filter){
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(todo => todo.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(todo => !todo.completed)
//   }
// }

//记忆功能selector
const selectTodos = createSelector([
  (state) => state.todos.present,
  (state) => state.visibilityFilter
],(todos,filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
})

function select(state){
  return {
    // visibleTodos:selectTodos(state.todos,state.visibilityFilter),
    visibleTodos:selectTodos(state),
    visibilityFilter:state.visibilityFilter
  }
}

export default connect(select)(App);
