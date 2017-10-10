/**
 * TodoList组件
 */
import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos,onTodoClick}) => (
  <ul>
    {
      todos.map( (todo,index) =>
        <Todo onClick={ () => onTodoClick(index)} {...todo} key={index}/>
      )
    }
  </ul>
);
TodoList.prototype = {
  todos:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      completed:PropTypes.bool.isRequired,
      text:PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick:PropTypes.func.isRequired
}

export default TodoList

















