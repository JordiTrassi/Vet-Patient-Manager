import { Formulario, Header, ListadoPacientes } from './components';


const App = () => {
  

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App
