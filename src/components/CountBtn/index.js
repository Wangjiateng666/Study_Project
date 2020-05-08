import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'
export default class CountBtn extends Component{
    render(){
      return (
        <CounterConsumer>
          {
            ({onIncrementCount,onDecrementCount})=>{
              const handler = this.props.type === 'decrement' ? onDecrementCount : onIncrementCount
              return <button onClick={handler}>{this.props.children}</button>
            }
          }
        </CounterConsumer>
      )
    }
  }