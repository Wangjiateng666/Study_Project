import React, { Component } from 'react'
import Another from './Another'
 class App extends Component {
    render() {
        return (
            <div>
                App
                <Another name="组件App" />
            </div>
        )
    }
}

export default App