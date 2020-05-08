import React, { Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {
    constructor () {
        super()
        this.state = {
            completedText: ''
        }
    }
    static getDerivedStateFromProps (props) {
        return {
            completedText: props.completed ? '完成' : '未完成'
        }
    }

    handleCheckboxChange = () => {
        // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
        const {
            onCompeletedChange = noop,
            id
        } = this.props
        onCompeletedChange(id)
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.completed !== this.props.completed
    }

    render() {
        console.log(`TodoItem ${this.props.title} render`)
        const {
            completed,
            title
        } = this.props
        return (
        <li>
            <input
                checked={completed}
                onChange={this.handleCheckboxChange}
                type="checkbox"
            />
            <span>{title} {this.state.completedText}</span>
        </li>
        )
    }
}