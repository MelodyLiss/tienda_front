import { useState } from "react";
import { ProductInfoDetail } from "./ProductInfoDetail";
// Componentes para cada sección


const Clients = () => (
    <div>
        <h2 className="text-2xl font-bold">Nuestros clientes</h2>
        <p>Testimonios y experiencias de nuestros clientes.</p>
    </div>
);

const QRCode = () => (
    <div>
        <h2 className="text-2xl font-bold">Cómo funciona el código QR</h2>
        <p>Explicación sobre el uso y beneficios del código QR.</p>
    </div>
);

export const ProductInformation = () => {
    const [activeSection, setActiveSection] = useState("info");

    // Objeto con componentes en lugar de texto
    const content = {
        info: <ProductInfoDetail />,
        clients: <Clients />,
        qr: <QRCode />
    };

    return (
        <section className="w-full my-4 ">
            <nav className="bg-orange-300 rounded-t-xl">
                <ul className="flex justify-center text-orange-500 font-bold uppercase">
                    {Object.keys(content).map((key) => (
                        <li
                            key={key}
                            onMouseEnter={() => setActiveSection(key)}
                            className={`cursor-pointer transition-all duration-300 p-4 flex-1 text-center 
                                ${
                                    activeSection === key
                                        ? "text-white bg-orange-500 rounded-t-xl"
                                        : "text-black"
                                }`}
                        >
                            {key === "info" && "Información detallada"}
                            {key === "clients" && "Nuestros clientes"}
                            {key === "qr" && "Cómo funciona el código QR"}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 bg-orange-100 border-dashed border-orange-500 border-2 border-t-0 rounded-b-xl">
                {content[activeSection]}
            </div>
        </section>
    );
};
