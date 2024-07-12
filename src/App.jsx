import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import Login from './organismos/login.jsx';
import Productos from './organismos/productos.jsx';
import Pedidos from './organismos/pedidos.jsx';
import Historial from './organismos/historial.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/> ,
    },
    {
      path:"/productos",
      element:<Productos/>,
    },
    {
      path:"/pedidos",
      element:<Pedidos/>,
    },
    {
      path:"/historial",
      element:<Historial/>,
    }

  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
