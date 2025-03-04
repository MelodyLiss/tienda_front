
export const Card = (plaquita) => {
    return (
        <div className="bg-gray-200 p-4 shadow-md rounded-lg">

            <div>
                <img className="bg-gray-50" src= {`/img/ejemplo_producto/${plaquita.imagen}.png`} alt="" />
            </div>

            <div className="p-2 flex justify-between items-end">
                <div className="flex flex-col text-lg">
                    <p>Diseño<span className='font-bold'>"{plaquita.nombre}"</span></p>
                    <p className='italic'>Temática <span className='tematica'>{plaquita.categoria}</span></p>
                </div>

                <div className='text-red-700 font-bold text-xl'>
                    <p>${plaquita.precio}</p>
                </div>
            </div>

        </div>
    )
}