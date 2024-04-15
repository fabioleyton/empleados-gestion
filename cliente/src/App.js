import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import ListaEmpleados from './componentes/ListaEmpleados';
import RegistroEmpleado from './componentes/RegistroEmpleado';

function App() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/empleados');
      setEmpleados(response.data);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    }
  };

  const actualizarListaEmpleados = () => {
    obtenerEmpleados();
  };

  return (
    <div className="container">
      <h1>Registro de Empleados</h1>
      <RegistroEmpleado actualizarListaEmpleados={actualizarListaEmpleados} />
      <ListaEmpleados empleados={empleados} />
    </div>
  );
}

export default App;