import React, { Component } from 'react'
import WithCopyrigh from './WithCopyrigh'

class Another extends Component {
    render() {
        return (
            <div>
                Another {this.props.name}
            </div>
        )
    }
}

export default WithCopyrigh(Another)
