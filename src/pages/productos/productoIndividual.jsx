
export const ProductoIndividualPage = () => {
    return (
        <main className="w-8/12 mx-auto">

            <section>

                <div> {/* div informacion */}
                    <h1 className="text-5xl font-bold text-center my-10 uppercase">Plaquita Amethys</h1>
                </div>

                <div> {/* div imagen */}
                    <div className="bg-gray-200 p-4 shadow-md rounded-lg">

                        <div> {/* imagen principal */}
                            <img className="bg-gray-50" src='/img/ejemplo_producto/cosmicas_amethys.png' alt="" />
                        </div>

                        <div> {/* imagenes secundarias */}
                            <img className="bg-gray-50" src='/img/ejemplo_producto/cosmica_amethys_c.png' alt=" placa circular" />
                            <img className="bg-gray-50" src='/img/ejemplo_producto/cosmica_amethys_g.png' alt=" placa de gato" />
                            <img className="bg-gray-50" src='/img/ejemplo_producto/cosmica_amethys_g.png' alt=" tamaños" />
                            <img className="bg-gray-50" src='/img/ejemplo_producto/cosmica_amethys_g.png' alt=" vista del QR" />
                        </div>

                    </div>
                </div>
            </section>





        </main>
    )
}
