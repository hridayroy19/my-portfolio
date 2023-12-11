import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRouter from './Router/Router'
import AuthProvider from './Provider/Provider'
// import Router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={MyRouter}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
