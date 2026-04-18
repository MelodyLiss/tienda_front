import { useState } from "react";


export const FormFilter = () => {

    const colors = [
        { name: "sin preferencias", value: "transparent" },
        { name: "naranjos", value: "#c27809" },
        { name: "rosas", value: "#ec20a8" },
        { name: "rojisos", value: "#9e092e" },
        { name: "morados", value: "#650a77" },
        { name: "verdes", value: "#148624" },
        { name: "azulados", value: "#4070d8" },
        { name: "oscuros", value: "#1b1b1b" },
        { name: "multicolor", value: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)" },
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0].value);
    const [hoveredColor, setHoveredColor] = useState(null);

    return (

        <form className="flex flex-col  p-1">

            <div className="flex  items-center gap-2 ">
                <label className="w-1/7 font-bold uppercase" htmlFor="busqueda">Busca tu diseño</label>
                <input className=" bg-white border-2 border-orange-500 rounded-md p-1 w-full" type="text" placeholder="girasoles, corazón, puntos ..." />
            </div>

            <div className="flex items-center justify-center gap-8 py-4">
                <div className="flex items-center gap-2">
                    <label className=" font-bold uppercase" htmlFor="categoria">Categorías</label>
                    <select className="  border-2  bg-white rounded-md p-1 w-full" name="categoria" id="categoria">
                        <option value="todas">Todas</option>
                        <option value="cosmicos">Cosmicos</option>
                        <option value="flores">Flores</option>
                        <option value="frutas">Frutas</option>
                        <option value="huellitas">Huellitas</option>
                        <option value="series">Series y Peliculas</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <p className="font-bold uppercase">Color Base</p>

                    <div className="flex gap-1">
                        {colors.map((color) => (
                            <div
                                key={color.value}
                                className="relative"
                                onMouseEnter={() => setHoveredColor(color.name)}
                                onMouseLeave={() => setHoveredColor(null)}
                            >
                                <div
                                    onClick={() => setSelectedColor(color.value)}
                                    style={{
                                        background: color.value,
                                        width: "15px",
                                        height: "15px",
                                        borderRadius: "50%",
                                        border: selectedColor === color.value 
                                            ? "3px solid rgb(85, 85, 85)" 
                                            : color.value === "transparent"
                                            ? "2px dashed rgb(85, 85, 85)"
                                            : "2px solid transparent",
                                        cursor: "pointer",
                                        boxShadow: "0 0 5px rgba(83, 82, 82, 0.5)",
                                    }}
                                />
                                {hoveredColor === color.name && (
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-stone-800 text-sm rounded shadow-md whitespace-nowrap border border-gray-200">
                                        {color.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </form>
    )
}