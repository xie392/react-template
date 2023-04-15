import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@/assets/style/global.scss'

import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = document.getElementById('root')

/**
 * 如果不需要控制台打印多次，可以将React.StrictMode注释掉
 */
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}
