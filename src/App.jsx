import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/helpers/Home'
import Registrar from './components/layouts/Registrar'
import Cita from './components/layouts/Cita'
const router = createBrowserRouter([
{
  path: '/',
  element: <Home />
},
{
  path: '/registrar',
  element: <Registrar />
},
{
  path: '/cita',
  element: <Cita />
},
])

function App() {
    return (
    <>
     <section>
      <RouterProvider router={router} />
    </section>
    </>
  )
}

export default App
