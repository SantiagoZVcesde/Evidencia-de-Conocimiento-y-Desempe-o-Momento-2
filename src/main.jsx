import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routerApp } from '../src/routes/routerApp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routerApp)} />
  </StrictMode>,
)