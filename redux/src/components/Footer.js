/**
 * Footer组件
 */
import React from 'react'
// import FilterLink from '../containers/FilterLink'
//
// const Footer = () => (
//   <p>
//     Show:{" "}
//     <FilterLink filter="SHOW_ALL">ALL</FilterLink>
//     {","}
//     <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
//     {","}
//     <FilterLink filter = "SHOW_COMPLETED">Completed</FilterLink>
//   </p>
// );
import PropTypes from 'prop-types'

export default class Footer extends React.Component{
  static propTypes = {
    onFilterChange : PropTypes.func.isRequired,
    filter:PropTypes.oneOf([
      "SHOW_ALL",
      "SHOW_COMPLETED",
      "SHOW_ACTIVE"
    ]).isRequired
  }

  renderFilter(filter,name){
    if(filter === this.props.filter) return name;

    return (
      <a href="#" onClick={
        e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }
      }>{name}</a>
    );
  }

  render(){
    return (
      <p>
        Show:
        {" "}
        {this.renderFilter('SHOW_ALL','ALL')}
        {" "}
        {this.renderFilter('SHOW_COMPLETED','Completed')}
        {" "}
        {this.renderFilter("SHOW_ACTIVE",'Active')}
      </p>
    );
  }
}


