// import React,{ useState,useEffect } from 'react';
import React, { Component,createContext } from 'react'
import ReactDOM from 'react-dom';
// import App1 from './App1'
// import App from './App'


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


// 定义一个Counter组件
  class Counter extends Component{
    render(){
      return (
        // 使用CounterConsumer来接收count
        <CounterConsumer>
          {
            // 注意！！！：Consumer的children必须是一个方法，这个方法有一个参数，这个参数就是Provider的value
            ({ count })=>{
              return <span>{count}</span>
            }
          }
        </CounterConsumer>
      )
    }
  }


  class CountBtn extends Component{
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


  class App extends Component{
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
  ReactDOM.render(
    // <Counter />,
    <CounterProvider>
      <App  />
    </CounterProvider>,
    document.querySelector("#root")
  )


// const Counter=()=>{
//   const [count,setCount] = useState(0)
//   useEffect(()=>{
//     console.log('渲染了');
//     document.title=`当前数量为${count}`
//   })
//   return (
//     <>
//       <p>当前数量为{count}</p>
//       <button onClick={()=>{setCount(count - 1)}} >-</button>
//       <span>{count}</span>
//       <button onClick={()=>{setCount(count + 1)}} >+</button>
//     </>
//   )
// }