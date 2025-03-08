import { useState } from "react";
import { Carousel } from "../components/shared/Carousel.jsx";
import { FormFilter } from "../components/productList/FormFilter.jsx";
import { Card } from "../components/productList/Card.jsx";
import { Button } from "../components/shared/ui/Button.jsx";
import placas from "../data/placas.js"

export const ProductListPage = () => {
    const [productos, setProducto] = useState(placas)

    

    return (
        <main className="w-8/12 mx-auto">
            <Carousel />

            {/* productos */}
            <section className="">
                <h1 className="text-5xl font-bold text-center my-10 uppercase">Plaquitas Personalizadas</h1>
                <FormFilter />

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {productos.map((producto, index) => (
                        <div className="flex flex-col items-center group hover:cursor-pointer" key={index}>
                            <Card
                                nombre={producto.nombre}
                                categoria={producto.categoria}
                                precio={producto.precio}
                                imagen={producto.imagen}
                            />
                            <div className="w-full flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};


