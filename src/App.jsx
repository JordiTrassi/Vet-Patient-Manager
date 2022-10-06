import { useState } from 'react';
import { Formulario, Header, ListadoPacientes } from './components';


const App = () => {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
