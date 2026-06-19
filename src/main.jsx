import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , Outlet , createRoutesFromElements , RouterProvider , Route } from 'react-router-dom'
import {Home , NavBar , Pattern , Footer} from './components'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/> 
      },
      {
        path:'pattern',
        element:<Pattern/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
