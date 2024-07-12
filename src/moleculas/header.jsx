import React from 'react';
import logo from '../assets/logo.png';
import Link from '../atomos/link';
import '../css/main.css';
import Input from '../atomos/input';
import { Navigate, useNavigate } from 'react-router-dom';
function Header (){
  const Navigate=useNavigate();
  const handlerClickProductos=()=>{
    Navigate("/productos");
  }
  const handlerClickPedidos=()=>{
    Navigate("/pedidos");
  }
  const handlerClickHistorial=()=>{
    Navigate("/historial");
  }
  return (
    <>
    <div className='divHeader'>
        <img src={logo} alt="" />
        <div>

        <Link onClick={()=>handlerClickProductos()} textoA="Productos"/>
        <Link onClick={()=>handlerClickPedidos()} textoA="Pedidos"/>
        <Link onClick={()=>handlerClickHistorial()} textoA="Historial"/>
        <Input/>
        </div>
        
    </div>
    </>
  );
};

export default Header;