import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import CreateTrip from './create_trip/index.jsx'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create_trip',
    element:<CreateTrip/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Toaster />
    <RouterProvider router={router}/>
  </StrictMode>,
)
