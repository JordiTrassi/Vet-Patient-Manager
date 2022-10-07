export const Header = () => {
    return (
       <div className="flex flex-col">
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
            <img src="https://cdn-icons-png.flaticon.com/512/141/141783.png"
                className="object-contain mt-10 h-40 w-auto"
                alt="vet-patient-manager" />
       </div>
    )
}