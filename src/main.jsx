import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import './utils/Reusable__Classes.css'
import { BrowserRouter } from "react-router-dom"
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App tab="/home" />
      </BrowserRouter>
    </Provider>,
  </React.StrictMode>
)