import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { CountrysApp } from './CountrysApp'
import { store } from './store/store'

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <CountrysApp />
  </Provider>,
)
