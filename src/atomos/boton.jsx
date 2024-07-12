import React from 'react';

function Boton (props){
  return (
    <>
    <button onClick={props.onClick} className={props.className}>{props.textoBoton}</button>
    </>
  );
};

export default Boton;