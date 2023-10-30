import React, { useState } from 'react';
import logo from "../img/MedicalSalud.jpg";
import {Link} from 'react-router-dom'

const Cita = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [especialidad, setEspecialidad] = useState(''); // Cambio de setespecialidad a setEspecialidad

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guarda la cita en Firebase
    try {
      const citaData = { nombre, fecha, hora, especialidad }; // Agregar 'especialidad' a los datos de la cita
      // Aquí debes usar la API de Firebase para guardar los datos en tu base de datos
      // Ejemplo: firebase.firestore().collection('citas').add(citaData);
      console.log('Cita reservada con éxito');
    } catch (error) {
      console.error('Error al reservar la cita', error);
    }

    // Limpia los campos del formulario después de la reserva
    setNombre('');
    setFecha('');
    setHora('');
    setEspecialidad(''); // Agregar paréntesis y limpiar 'especialidad'
  };

  return (
    <section className="contenedor-superior">
      <div className="cita-container">      
        <div>
        <img src={logo} className='logocita' alt="Imagen de fondo" />
        <h2 className="titulo">Reservar Cita Médica</h2>
          <form onSubmit={handleSubmit} className="cita-form">
            <div className="form-group">
              
              <input type="text"  placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="date"  placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div className="form-group">
             
              <input type="time" placeholder="Hora" value={hora} onChange={(e) => setHora(e.target.value)} />
            </div>
            <div className="form-group">
            
              <input type="text"  placeholder="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />
            </div>
            <button type="submit">Reservar Cita</button>
            <h3><Link to='/'>Volver</Link></h3>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cita;