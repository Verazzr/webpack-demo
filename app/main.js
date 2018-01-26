import React from 'react'
import ReactDOM from 'react-dom'
import Greeter from './greeter.js'

import './main.css'

// document.querySelector('#root').appendChild(greeter())
ReactDOM.render(<Greeter />, document.getElementById('root'))
