import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import { CounterProvider } from './counterStore'

  ReactDOM.render(
    // <Counter />,
    <CounterProvider>
      <App  />
    </CounterProvider>,
    document.querySelector("#root")
  )
