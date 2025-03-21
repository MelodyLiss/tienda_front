export const Button = ({ className , text}) => {
    return (
        <button className={`bg-orange-500 text-white px-4 py-2 rounded-4xl w-2/3 my-4 font-bold hover:bg-orange-600 hover:cursor-pointer ${className}`}>
            {text} <a href=""></a>
        </button>
    );
}