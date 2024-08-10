import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../jsx/App'
import '../css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
