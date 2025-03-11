import { useState } from 'react';

export const PetPhotoUpload = () => {
    const [file1Name, setFile1Name] = useState('');
    const [file2Name, setFile2Name] = useState('');

    const handleFileChange1 = (event) => {
        if (event.target.files[0]) {
            setFile1Name(event.target.files[0].name);
        }
    };

    const handleFileChange2 = (event) => {
        if (event.target.files[0]) {
            setFile2Name(event.target.files[0].name);
        }
    };

    return (
        <div className="mb-4 border-b-2 border-dashed border-orange-500 p-4">

            <h2 className="text-2xl font-bold mb-4">Sube la fotografía de tu doggys o michi</h2>

            <div className="mb-4">
                <input
                    type="file"
                    id="imagen1"
                    name="imagen"
                    className="hidden"
                    onChange={handleFileChange1}
                />
                <label
                    htmlFor="imagen1"
                    className="flex items-center cursor-pointer"
                >
                    <span className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors duration-200">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Seleccionar foto principal
                    </span>
                    {file1Name ? (
                        <span className="ml-3 text-amber-800 bg-amber-200 px-3 py-1 rounded-lg">
                            {file1Name}
                        </span>
                    ) : (
                        <span className="ml-3 text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                            No hay foto seleccionada
                        </span>
                    )}
                </label>
            </div>

            <div className="mb-4">
                <input
                    type="file"
                    id="imagen2"
                    name="imagen2"
                    className="hidden"
                    onChange={handleFileChange2}
                />
                <label
                    htmlFor="imagen2"
                    className="flex items-center cursor-pointer"
                >
                    <span className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors duration-200">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Seleccionar foto opcional
                    </span>
                    {file2Name ? (
                        <span className="ml-3 text-amber-800 bg-amber-200 px-3 py-1 rounded-lg">
                            {file2Name}
                        </span>
                    ) : (
                        <span className="ml-3 text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                            No hay foto opcional seleccionada
                        </span>
                    )}
                </label>
            </div>


            <p className="text-md text-gray-800 mt-2">
                Se eligirá una de las 2 opciones, recuerde proporcionar la fotografía con la mejor calidad posible y sin cortes en su cabecita
            </p>
        </div>
    );
};


