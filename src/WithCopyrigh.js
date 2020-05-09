import React, { Component } from 'react'

const WithCopyrigh=(YourComponent)=>{
    return class WithCopyrigh extends Component {
        render() {
            console.log(this.props);
            return (
                <>
                    <YourComponent {...this.props} / >
                    <div>&copy;2019 &emsp; </div>
                </>
            )
        }
    }
}

export default WithCopyrigh