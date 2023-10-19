import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Myrouter from './MyRouts.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Components/Firebase.jsx/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders> <RouterProvider router={Myrouter} /></AuthProviders>
  </React.StrictMode>,
)
