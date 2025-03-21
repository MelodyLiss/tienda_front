import React, { useState } from 'react';
import { FormInput } from '../components/shared/ui/FormInput';


export const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="w-8/12 mx-auto mb-4">
            <h1 className="text-5xl uppercase text-center font-bold">¡Que alegría que estes por aquí!</h1>

            {/* formulario iniciar sesion */}
            <section className="mb-4 bg-orange-100 p-4 rounded-lg border-2 border-dashed border-orange-500 w-2xl mx-auto my-8">

                <h2 className="text-2xl font-bold mb-4 text-center uppercase " >Iniciar sesión</h2>

                <form action="" className="flex flex-col gap-4 ">

                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingrese su correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        
                    />

                    <FormInput
                        label="Contraseña"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        
                    />

                    <button className="bg-amber-700 text-white uppercase px-4 py-2 rounded-md">Iniciar sesión</button>

                    <p>¿Olvidaste tu contraseña? <a href="">ingresa aquí</a></p>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <p className="mx-4 text-gray-500">o</p>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className="flex gap-4 flex-wrap justify-center">
                        <button className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
<a href=""><i className="fa-brands fa-facebook"></i></a>
</button>
                        <button className="flex-1 text-center bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
<a href=""><i className="fa-brands fa-google"></i></a>
</button>
                        <button className="flex-1 text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
<a href=""><i className="fa-brands fa-apple"></i></a>
</button>
                    </div>

                </form>

            </section>

                </main>
    );
}