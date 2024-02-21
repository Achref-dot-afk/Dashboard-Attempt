import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import  store  from './redux/store.js'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ProSidebarProvider>
      <App />
      </ProSidebarProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
