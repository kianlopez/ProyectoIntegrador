import React from 'react'
import Boton from '../atomos/boton';
function ArticuloAgregado(props) {
  return (
    <div className='divArticuloAgregado'>
    <p>{props.id}</p>
    <p>{props.cantidadArticulos}</p>
    <Boton className="mas" onClick={props.onClickMas} textoBoton="+"/>
    <Boton className="menos" onClick={props.onClickMenos} textoBoton="-"/>
    </div>
  )
}
export default ArticuloAgregado
