/**
 * Created by CLR on 2017-10-10.
 */

import React from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends React.Component{
  static propTypes = {
    onAddClick:PropTypes.func.isRequired
  }

  render(){
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick={ e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  handleClick(e){
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text)
    node.value = "";
  }
}

