import React, { useState } from 'react';
import '../css/main.css';
import Boton from '../atomos/boton';
import Texto from '../atomos/texto';
import CardProducto from './cardProducto';
import img1 from '../assets/imagen1.png';
import img2 from '../assets/imagen2.png';

function ContenedorProductos() {
  const [showOptions, setShowOptions] = useState(false);
  const [showCard,setShowCard]=useState(false);

  const handlerClickCategorias = () => {
    setShowOptions(!showOptions);
  };
  const handlerClickCard=()=>{
    setShowCard(true);
  }

  return (
    <>
      <div className='cuerpoProdcuto'>
        <div className='contenedorProducto'>
          <div className='headerProductoMorado'>
            <Texto textoP="Productos disponibles"/>
            <Boton onClick={handlerClickCategorias} textoBoton="Categorias"/>
          </div>
          {showOptions && (
            <div className='opcionesCategorias'>
              <Boton textoBoton="Limpieza"/>
              <Boton textoBoton="Belleza"/>
              <Boton textoBoton="Electrodomesticos"/>
              <Boton textoBoton="Cocina"/>
            </div>
          )}
          <div className='cuerpoContenedorArticulos'>
          <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img1}/>
          <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img2}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img1}/>
            <CardProducto onClick={()=>handlerClickCard()} nombre="funda lavadora satin" precio="$299" id="16204" src={img2}/>

          </div>
          {showCard&&(
            <div className='divAlerta'>
        <div className='alertaCuadro'>
          <CardProducto nombre="funda lavadora satin" precio="$299" id="16204" src={img1}/>
          <Boton onClick={()=>setShowCard(false)} textoBoton="comprar"/>
            </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContenedorProductos;
