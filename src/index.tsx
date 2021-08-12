import React from 'react'
import {render} from 'react-dom'
import App from './App'
import Store from "./store";

render(
  <React.StrictMode>
    <Store>
      <App/>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)
