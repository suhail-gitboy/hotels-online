import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import ContextWrapped from './Common/ContextWrapped.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <ContextWrapped>
    <Provider store={store}>
      <App />
    </Provider>
  </ContextWrapped>
)
