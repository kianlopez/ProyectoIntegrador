import React from 'react'
import ArticuloAgregado from './articuloAgregado'
import { useState } from 'react';
import Boton from '../atomos/boton';
function ContenedorCarrito(props) {
    const [cantidad,setCantidad]=useState(1);

  return (
    <>
    <div className='divPadreDeContenedorArticulosAgregados'>
    <div className='divContenedorArticulosAgregados'>
        <div className='headerArticulos'><p>Articulos agregados</p></div>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>
        <ArticuloAgregado onClickMenos={()=>setCantidad(cantidad-1)} onClickMas={()=>setCantidad(cantidad+1)}  id="16123" cantidadArticulos={cantidad}/>

    </div>
    <p className='total'>Total: ${props.total}</p>
    <Boton className="botonRealizarPedido" textoBoton="Realizar pedido"/>
    </div>
    </>
  )
}

export default ContenedorCarrito
