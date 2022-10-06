
export const Paciente = () => {
  return (
     <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}  
            <span className="font-normal normal-case">HOOK</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}  
            <span className="font-normal normal-case">Jordi</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}  
            <span className="font-normal normal-case">email@email.com </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}  
            <span className="font-normal normal-case">10 de Diciembre de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}  
            <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam debitis molestias, expedita modi qui eligendi ab, vel animi tempora cumque necessitatibus voluptatem soluta veniam. Possimus facere laudantium natus nulla eveniet!</span>
        </p>
    </div>
  )
}
