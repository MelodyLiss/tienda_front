export const Button = ({ className }) => {
    return (
        <button className={`bg-orange-500 text-white px-4 py-2 rounded-4xl w-1/3 my-4 font-bold hover:bg-orange-600 hover:cursor-pointer ${className}`}>
            Ver opciones
        </button>
    );
}