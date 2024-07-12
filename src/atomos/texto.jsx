import React from 'react';

function Texto (props){
  return (
    <>
    <p className={props.className}>{props.textoP}</p>
    </>
  );
};

export default Texto;