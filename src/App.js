import React,{ Component } from 'react'

import {
  Counter,
  CountBtn
}from './components'

export default class App extends Component{
    render(){
      return (
        <>
          <CountBtn type="decrement">-</CountBtn>
          <Counter />
          <CountBtn type="increment">+</CountBtn>
        </>
      )
    }
  }