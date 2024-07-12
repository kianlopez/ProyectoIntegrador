import React from 'react';
import Header from '../moleculas/header'; 
import ContenedorPedidos from '../moleculas/contenedorPedidos';
import ContenedorCarrito from '../moleculas/contenedorCarrito';
import '../css/main.css';
import { useState } from 'react';
function Pedidos() {
    
     return (
    <>
<Header/>
<div className='divCuerpoPedidosContenedores'>
<ContenedorPedidos/>
<ContenedorCarrito/>
</div>
    </>
  )
}
export default Pedidos;