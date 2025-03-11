import { useState } from "react";

import { ProductGallery } from "../components/productDetail/ProductGallery";
import { ProductForm } from "../components/productDetail/ProductForm";
import { ProductInformation } from "../components/productDetail/ProductInformation";

import placas from "../data/placas";

export const ProductDetailPage = () => {

    const producto = placas[0]; /* despues lo haremos dinámico 😉*/


    return (
        <main className="w-8/12 mx-auto">

            <section className="flex gap-4">
                <div className="w-1/2 my-auto">
                    <ProductGallery
                        imagen={producto.imagen}
                        imagen2={producto.imagen2}
                        imagen3={producto.imagen3}
                    />
                </div>

                <div className="w-1/2">
                    <ProductForm
                        nombre={producto.nombre}
                        categoria={producto.categoria}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                    />
                </div>
            </section>

            <section>
                <ProductInformation />
            </section>


        </main>
    );
};
