import React from 'react'
import '../css/main.css';
import CardProducto from './cardProducto';
import Boton from '../atomos/boton';
import img1 from '../assets/imagen1.png';
import img2 from '../assets/imagen2.png';
function ContenedorPedidos() {
  return (
    <div className='cuerpoProdcuto'>
        <div className='contenedorProducto'>
          <div className='cuerpoContenedorArticulos'>
          <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img1}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img2}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img1}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img2}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img2}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img1}/>
          </div> 
        </div>
      </div>
  )
}

export default ContenedorPedidos
