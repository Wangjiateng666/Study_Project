import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


export default class TodoList extends Component {
    static propTypes={
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })).isRequired,
        onCompeletedChange:PropTypes.func
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo=>{
                        return (
                            <TodoItem 
                                key={todo.id}
                                {...todo}
                                onCompeletedChange={this.props.onCompeletedChange}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
