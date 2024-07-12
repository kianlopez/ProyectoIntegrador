import React from 'react';
import Texto from '../atomos/texto';
import '../css/main.css';
function CardProducto (props){
  return (
    <>
    <div onClick={props.onClick} className='cardProducto'>
        <Texto textoP={props.nombre}/>
        <Texto textoP={props.precio}/>
        <Texto textoP={props.id}/>
        <img src={props.src} alt="" />
    </div>
    </>
  );
};

export default CardProducto;