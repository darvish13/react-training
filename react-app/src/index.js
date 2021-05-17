import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Sandbox from './Sandbox'
import Jokepage from './components/JokePage/Jokepage'
import Parent from './components/Parent/Parent'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sandbox /> */}
    {/* <Jokepage jokes={['Chuck noris 1', 'Chuck Noris2', 'Nuck Choris 3']}/> */}
    <Parent/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
