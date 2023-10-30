import React from 'react';
import logo from "../img/MedicalSalud.jpg";
import {Link} from 'react-router-dom'
 

const Login = () => {
  const iniciarSesion = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Verifica si los datos son correctos (datos quemados)
    if (username === 'usuario' && password === '12345') {
      // Simula el inicio de sesión exitoso
      localStorage.setItem('usuarioLogueado', 'true');
      console.log('Nombre de usuario: ${username}, Contraseña: ${password}');
      // Redirige al usuario a la página "Cita" al iniciar sesión exitosamente
      window.location.href = '../cita';
    } else {
      console.log('Credenciales incorrectas');
    }
  };

   return (
    <section className='fondo_formulario'>
      <div className="login-contenido">
        <img src={logo} className='logo' alt="Imagen de fondo" />
        <h1 className='inicio'>Iniciar Sesión</h1>
        <form id="login-form" onSubmit={iniciarSesion}>
          <input type="text" name="username" placeholder="Usuario" />
          <input type="password" name="password" placeholder="Contraseña" />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <h2>¿No tiene una cuenta? <Link to='/Registrar'>REGÍSTRATE</Link></h2>
      </div>
    </section>
  );
};

export default Login;
