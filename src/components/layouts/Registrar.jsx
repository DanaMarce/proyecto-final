import React, { useState } from "react";
import logo from "../img/MedicalSalud.jpg";
import {Link} from 'react-router-dom'


const Registro = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleRegistro = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(correo, contrasena);
      const userId = userCredential.user.uid;

      await firebase.firestore().collection("usuarios").doc(userId).set({
        documento,
        nombre,
        correo,
      });

      alert("Usuario registrado con éxito");
    } catch (error) {
      alert("Error al registrar usuario: " + error.message);
    }
  };

  return (
    
    <section className="cotenedor-registro">
    <div className="registro-form">
    <img src={logo} className='logo-registro' alt="Imagen de fondo" />
    <h1 className='registro'>Registro de Usuario </h1>
      <input
        type="text"
        placeholder="Número de documento"
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <button onClick={handleRegistro}>Registrarse</button>
      <h3><Link to='/'>Volver</Link></h3>
    </div>
    
    </section>
  );
};

export default Registro;
