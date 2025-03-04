export const NavClientTop = () => {
    return (
        <nav className="bg-red-500  pr-40 text-amber-50">
            <ul className="flex justify-end items-center">
                <li className="p-2">
                    <a className="rounded-md py-2 px-4 hover:bg-red-800" href="/">
                        <i className="fa-regular fa-user"></i>
                        <span className=" pl-1">Iniciar sesión</span>
                    </a>
                </li>
                <li className="p-2">
                    <a className="rounded-md py-2 px-4 hover:bg-red-800" href="/">
                        <i className="fa-regular fa-heart"></i>
                        <span className=" pl-1">2</span>
                    </a>
                </li>

                <li className="p-2">
                    <a className="rounded-md py-2 px-4 hover:bg-red-800" href="/">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className=" pl-1">3</span>
                    </a>
                </li>

                <li className="p-2">
                    <a className="rounded-md py-2 px-4 hover:bg-red-800" href="/" >
                        <i className="fa-regular fa-lightbulb"></i>
                    </a>
                </li>
                
            </ul>
        </nav>
    );
}

