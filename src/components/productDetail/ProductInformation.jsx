import { useState } from "react";
import { ProductInfoDetail } from "./ProductInfoDetail";
import { LoopCarousel } from "../shared/LoopCarousel";
import { ColumnInfo } from "../shared/ColumnInfo";


export const ProductInformation = () => {
    const [activeSection, setActiveSection] = useState("info");

    // Objeto con componentes en lugar de texto
    const content = {
        info: <ProductInfoDetail />,
        clients: <LoopCarousel />,
        qr: <ColumnInfo />
    };

    return (
        <section className="w-full my-4">
            <nav className="bg-orange-300 rounded-t-xl">
                <ul className="flex justify-center text-orange-500 font-bold uppercase">
                    {Object.keys(content).map((key) => (
                        <li
                            key={key}
                            onClick={() => setActiveSection(key)}
                            className={`cursor-pointer transition-all duration-300 p-4 flex-1 text-center 
                                ${
                                    activeSection === key
                                        ? "text-white bg-orange-500 rounded-t-xl"
                                        : "text-black hover:bg-orange-400 hover:text-white rounded-t-xl"
                                }`}
                        >
                            {key === "info" && "Información detallada"}
                            {key === "clients" && "Nuestro Producto en Acción"}
                            {key === "qr" && "Cómo funciona el código QR"}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 bg-orange-100 border-dashed border-orange-500 border-2 border-t-0 rounded-b-xl transition-opacity duration-300 ease-in-out">
                {content[activeSection]}
            </div>
        </section>
    );
};
