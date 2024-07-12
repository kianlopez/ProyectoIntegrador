import React from 'react';
import logo from '../assets/logo.png';
import Texto from '../atomos/texto';
import Boton from '../atomos/boton';
import Input from '../atomos/input';
import '../css/main.css';
import { useNavigate } from 'react-router-dom';
function FormLogin (){
  const navigate=useNavigate();
  const handlerClick=()=>{
    navigate("/productos");
  }
  return (
    <>
    <div className='contendorLoginForm'>
        <img src={logo} alt="" />
        <Texto textoP="Correo Electronico"/>
        <Input/>
        <Texto textoP="Contraseña"/>
        <Input/>
        <Boton onClick={()=>handlerClick()} textoBoton="Iniciar"/>
    </div>
    </>
  );
};

export default FormLogin;