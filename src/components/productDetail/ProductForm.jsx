import { useState } from "react";

import { PetPhotoUpload } from "./ui/PetPhotoUpload";
import { Button } from "../shared/ui/Button";
import { FormInput } from '../shared/ui/FormInput';

export const ProductForm = ({ nombre, categoria, descripcion, precio }) => {

    const [cantidad, setCantidad] = useState(1);
    const [formData, setFormData] = useState({
        nombreMascota: '',
        telefono: ''
    });

    const handleCantidad = (e) => {
        setCantidad(e.target.value);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <section className="flex flex-col gap-4">

            <div className="mb-4"> {/* descripción base */}
                <h1 className="text-5xl font-bold uppercase " >Plaquita {nombre}</h1>
                <h3 className="text-2xl font-bold"> Temática: {categoria}</h3>
                <p className="text-lg ">{descripcion}</p>
            </div>

            <form className="flex flex-col gap-4">
                <div className="mb-4 flex flex-col sm:flex-row gap-4"> {/* modelo de la plaquita */}
                    <h2 className="text-2xl font-bold uppercase">Modelo</h2>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="modelo" value="huesito" className="hidden peer" />
                            <span className="px-4 py-2 border bg-white  border-gray-600 rounded-lg  cursor-pointer peer-checked:bg-orange-500 peer-checked:text-white">
                                Huesito
                            </span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="modelo" value="circular" className="hidden peer" />
                            <span className="px-4 py-2 border  bg-white  border-gray-600 rounded-lg cursor-pointer peer-checked:bg-orange-500 peer-checked:text-white">
                                Circular
                            </span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="modelo" value="gatito" className="hidden peer" />
                            <span className="px-4 py-2 border  bg-white  border-gray-600 rounded-lg cursor-pointer peer-checked:bg-orange-500 peer-checked:text-white">
                                Gatito
                            </span>
                        </label>
                    </div>
                </div>


                <div className="mb-4 flex gap-4"> {/* Formato de diseño */}
                    <h2 className="text-2xl my-auto font-bold uppercase">Formato de diseño</h2>
                    <select name="formato" id="formato" className="border border-gray-600 rounded-lg px-4 py-2 bg-white text-gray-700">
                        <option value="default" className="text-gray-700">Selecciona un formato</option>
                        <option className="" value="conFoto">con foto y nombre</option>
                        <option className="" value="conCaricatura">con caricatura y nombre</option>
                        <option className="" value="soloTexto">Solo nombre</option>
                    </select>
                </div>

                <div className="mb-4 bg-orange-100 p-4 rounded-lg border-2 border-dashed border-orange-500">
                    <h2 className="text-2xl font-bold mb-4 text-center uppercase">Datos que necesitamos</h2>
                    <PetPhotoUpload />

                    <div>
                        {/* Reemplazando los inputs originales con el componente FormInput */}
                        <FormInput
                            label="Nombre mascota"
                            name="nombreMascota"
                            id="nombreMascota"
                            placeholder="ingrese el nombre de su doggy o michi"
                            value={formData.nombreMascota}
                            onChange={handleChange}
                        />

                        <FormInput
                            label="Teléfono contacto"
                            type="tel"
                            name="telefono"
                            id="telefono"
                            placeholder="ingrese el teléfono para el reverso de la plaquita"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <p className="text-center text-sm text-gray-600">Si deseas otra plaquita con este diseño pero con otros datos, debes hacerlo de manera individual</p>

                <div className="mb-4 flex flex-col sm:flex-row justify-between gap-4 px-4">
                    <div> {/* cantidad de plaquitas */}
                        <label className="font-bold uppercase mr-4" htmlFor="cantidad">Cantidad</label>
                        <input className="border border-gray-600 rounded-lg p-1 bg-white text-gray-700 w-20" type="number" name="cantidad" id="cantidad" min={1} max={10} value={cantidad} onChange={handleCantidad}/>
                    </div>

                    <div className="flex items-center"> {/* precio total */}
                        <h2 className="text-2xl mr-4">Precio total</h2>
                        <p className="text-2xl font-bold text-orange-600">${precio * cantidad}</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button text="Agregar al carrito" />
                </div>

            </form>
        </section>
    )
}