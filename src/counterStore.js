import React, { Component,createContext } from 'react'


const {
    Provider,
    Consumer:CounterConsumer  //解构出来重新赋值给一个CounterConsumer的组件
  }=createContext()
  // console.log(createContext());

// 封装了一个基本的Provider,因为直接使用Provider不方便管理状态
  class CounterProvider extends Component{
    constructor(){
      super()
      // 这里的状态是共享的，任何CounterProvider的后代组件都可以通过CounterConsumer来接收这个值
      this.state={
        count:100
      }
    }
    // 这里的方法也会通过Provider共享下去
    incrementCount=()=>{
      this.setState({
        count:this.state.count + 1
      })
    }

    decrementCount=()=>{
      this.setState({
        count:this.state.count - 1
      })
    }

    render(){
      return (
        // 使用Provider这个组件，它必须要有一个value值，这个value里可以传递任何的数据。一般还是传递一个对象比较合理。
        <Provider value={{
          count:this.state.count,
          onIncrementCount:this.incrementCount,
          onDecrementCount:this.decrementCount
        }}>

          {/* 后代组件 */}
          {this.props.children}
        </Provider>
      )
    }
  }


  export {
    CounterConsumer,
    CounterProvider
  }