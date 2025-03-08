
export const ProductForm = ({nombre, categoria, descripcion, precio}) => {
    return (
        <form className="flex flex-col ">
            <h1 className="text-5xl font-bold text-center mb-4" >Plaquita {nombre}</h1>
            <h3 className="text-2xl font-bold text-center mb-4"> Temática: {categoria}</h3>
            <p className="text-lg text-center mb-4">{descripcion}</p>
            <p className="text-lg text-center mb-4">Precio: ${precio}</p>
        </form>
    )
}
