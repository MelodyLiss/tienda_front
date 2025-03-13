import img_demo_1 from '/img/imagen_demo_1.png'
import img_demo_2 from '/img/imagen_demo_2.png'
import img_demo_3 from '/img/imagen_demo_3.png'
import img_demo_4 from '/img/imagen_demo_4.png'

import { useState } from 'react'

export const LoopCarousel = () => {
    const images = [img_demo_1, img_demo_2, img_demo_3, img_demo_4];
    const totalImages = images.length;
    const visibleImages = 3;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center m-4 uppercase">Fotos de nuestros productos</h2>

            {/* Contenedor del carrusel */}
            <section className="relative w-4/5 mx-auto">
                {/* Botón izquierdo */}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md text-gray-700"
                    onClick={handlePreviousImage}
                >
                    ◀
                </button>

                {/* Contenedor de imágenes con transición */}
                <div className="flex w-full overflow-hidden bg-amber-50 p-4 rounded-xl relative">
                    {Array.from({ length: visibleImages }).map((_, index) => (
                        <div
                            key={index}
                            className="w-1/3 flex justify-center items-center my-4 mx-2 duration-500 ease-in-out transform:translateX(0)"
                        >
                            <img
                                src={images[(currentIndex + index) % totalImages]}
                                alt={`imagen_${index}`}
                                className="rounded-xl transition-opacity duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>

                {/* Botón derecho */}
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md text-gray-700"
                    onClick={handleNextImage}
                >
                    ▶
                </button>
            </section>
        </div>
    );
};