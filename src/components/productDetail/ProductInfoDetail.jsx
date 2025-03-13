
import img_demo from '/img/imagen_demo_1.png'
export const ProductInfoDetail = () => {
    return (
        <div>

            <div className="flex items-center justify-center">
                <table className="bg-gray-100  border-separate pb-4 m-4">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2 text-left uppercase">especificaciones</th>
                        </tr>
                    </thead>

                    <tbody className="pb-4">
                        <tr>
                            <td className="px-2 ">Acrilico de x de espesor</td>
                        </tr>

                        <tr>
                            <td className="px-2 ">Impresión bajo la técnica de sublimación</td>
                        </tr>

                        <tr>
                            <td className="px-2 ">Crea el perfil de tu mascota en nuestra App 100% gratuita</td>
                        </tr>
                        <tr>
                            <td className="px-2 ">La placa NO necesita batería</td>
                        </tr>

                        <tr>
                            <td className="px-2 ">Escaneo de código QR fácil y rápido</td>
                        </tr>


                    </tbody>
                </table>

                <table className="bg-gray-100  border-separate pb-4 m-4">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2 text-left uppercase">Tamaños</th>
                        </tr>
                    </thead>

                    <tbody className="pb-4">
                        <tr>
                            <td className="px-2 ">Modelo huesito : 4,5 x 2,5 cm</td>
                        </tr>
                        <tr>
                            <td className="px-2 ">Modelo circular : 4 x 4 cm</td>
                        </tr>
                        <tr>
                            <td className="px-2 ">Modelo gatito : 4 x 3,5 cm</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <article className="flex flex-col ">
                <h2 className="text-3xl font-bold text-center mb-4 uppercase">Protege a tu mascota, y regálale la oportunidad de regresar a casa</h2>

                <section className="flex p-4">

                    <div className="flex flex-col">
                        <p>
                            Las plaquitas de identificación para mascotas son un accesorio esencial para la seguridad de nuestros amigos de cuatro patas.
                        </p>
                        <p>
                            No solo ayudan a que una mascota perdida pueda regresar a casa rápidamente, sino que también ofrecen información clave en caso de emergencia
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, pariatur blanditiis aut animi quo alias. Dolorem, soluta, sunt ut accusantium reiciendis autem esse sint dolor culpa necessitatibus, doloribus quo assumenda ipsum totam ab? Porro, inventore, repellat quia magnam eligendi eos provident exercitationem quo earum impedit sit ipsam. Culpa animi id repudiandae, suscipit ipsa accusamus necessitatibus eum iure autem, tempore vitae?
                        </p>
                    </div>

                    <img src={img_demo} alt="mascota" className="w-1/4 rotate-3 border-4 border-gray-300 rounded-md shadow-md m-4" />


                </section>


            </article>
        </div>
    )
}
