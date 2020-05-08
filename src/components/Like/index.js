import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state={
            isLiked:false
        }
    }
    handleLikedClick=()=>{
        this.setState((prevState)=>{
            // console.log('setState内部的this.state.isLiked',this.state.isLiked);
            return {
                isLiked:!this.state.isLiked
            }
        })
        // console.log('setState外部的this.state.isLiked',this.state.isLiked);
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikedClick}>
                    {
                        this.state.isLiked ? "取消 ❤️" : "喜欢 🖤"
                    }
                </span>
            </div>
        )
    }
}
