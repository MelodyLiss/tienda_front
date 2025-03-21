export const ProductGallery = ({ imagen, imagen2, imagen3 }) => {
    return (
        <section className="flex flex-col sm:flex-row p-2 items-center gap-4">
            {/* Imágenes secundarias */}
            <div className="w-full sm:w-2/12 flex flex-col justify-center items-center gap-2">
                <div className="border-2 border-gray-300 rounded-md hover:border-orange-400">
                    <img src={`/img/ejemplo_producto/${imagen}.png`} alt="plaquita forma huesito" />
                    <p className="text-center text-xs pb-2">4,5 x 2,5 cm</p>
                </div>

                <div className="border-2 border-gray-300 rounded-md hover:border-orange-400">
                    <img src={`/img/ejemplo_producto/${imagen2}.png`} alt="plaquita forma circular" />
                    <p className="text-center text-xs pb-2">4 x 4 cm</p>
                </div>

                <div className="border-2 border-gray-300 rounded-md hover:border-orange-400">
                    <img src={`/img/ejemplo_producto/${imagen3}.png`} alt="plaquita forma gatito" />
                    <p className="text-center text-xs pb-2">4 x 3,5 cm</p>
                </div>
            </div>

            {/* Imagen principal */}
            <div className="w-full sm:flex-1 flex justify-center items-center">
                <img src={`/img/ejemplo_producto/${imagen}.png`} alt="plaquita forma huesito" />
            </div>
        </section>
    );
};
