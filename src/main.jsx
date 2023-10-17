import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Myrouter from './MyRouts.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Myrouter} />
  </React.StrictMode>,
)
