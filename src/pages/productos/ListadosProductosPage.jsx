import { useState } from "react";
import { Carousel } from "../../components/carousel/Carousel.jsx";
import { FormFilter } from "../../components/formFilter/FormFilter.jsx";
import { Card } from "../../components/card/Card.jsx";
import { Button } from "../../components/custom/button/Button.jsx";
import placas from "../../data/placas.js"

export const ListadosProductosPage = () => {

    const [plaquitas, setPlaquitas] = useState(placas)

    return (
        <main className="w-8/12 mx-auto">
            <Carousel />

            {/* productos */}
            <section className="">
                <h1 className="text-5xl font-bold text-center my-10 uppercase">Plaquitas Personalizadas</h1>
                <FormFilter />

                <div className="grid sm:grid-cols-3 gap-4 [&>*:nth-last-child(-n+2)]:sm:translate-x-1/2">
                    {plaquitas.map((plaquita, index) => (
                        <div className="flex flex-col items-center group hover:cursor-pointer" key={index}>
                            <Card
                                nombre={plaquita.nombre}
                                categoria={plaquita.categoria}
                                precio={plaquita.precio}
                                imagen={plaquita.imagen}
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


