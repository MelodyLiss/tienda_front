import { useState } from "react";

import { ProductGallery } from "../components/productDetail/ProductGallery";
import placas from "../data/placas";
import { ProductForm } from "../components/productDetail/ProductForm";


export const ProductDetailPage = () => {

    const producto = placas[0]; /* despues lo haremos dinámico 😉*/


    return (
        <main>

            <section className="flex  w-3/4 mx-auto">
            <ProductGallery
            className="w-3/5"
            imagen={producto.imagen}
            imagen2={producto.imagen2}
            imagen3={producto.imagen3}
            />
            
            <ProductForm 
            className="w-1/2"
            nombre={producto.nombre}
            categoria={producto.categoria}
            descripcion={producto.descripcion}
            precio={producto.precio}
            />
            </section>
        </main>
    );
};
