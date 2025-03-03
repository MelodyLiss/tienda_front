export const NavClientTop = () => {
    return (
        <nav className="bg-red-500 p-1 pr-40 text-amber-50">
            <ul className="flex justify-end items-center space-x-3">
                <li className="hover:bg-amber-600 p-1.5 rounded-md">
                    <a href="/">
                        <i className="fa-regular fa-user"></i>
                        <span className=" pl-1">Iniciar sesión / registrarse</span>
                    </a>
                </li>
                <li className="hover:bg-amber-600 p-1.5 rounded-md">
                    <a href="/">
                        <i className="fa-regular fa-heart"></i>
                        <span className=" pl-1">2</span>
                    </a>
                </li>

                <li className="hover:bg-amber-600 p-1.5 rounded-md">
                    <a href="/">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className=" pl-1">3</span>
                    </a>
                </li>

                <li className="hover:bg-amber-600 p-1.5 rounded-md">
                    <a href="/">
                        <i className="fa-regular fa-lightbulb"></i>
                        
                    </a>
                </li>

                <li className="hidden">  {/* ver porque la ultima queda desfasada */}
                    <a href="/">
                        <i className="fa-regular fa-lightbulb"></i> {/* eliminar luego */}
                        
                    </a>
                </li>
                
            </ul>
        </nav>
    );
}
