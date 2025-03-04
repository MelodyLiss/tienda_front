import './navBar.css';

export const NavBar = () =>{
    
    return(
        <nav className='nav_cinta bg-orange-500 w-7xl mx-auto mt-4'>
            <ul className='flex justify-around items-stretch font-medium text-amber-50 text-xl'>
                <li className='p-2'><a href="#" className='rounded-md py-2 px-4 hover:bg-orange-600'>Plaquitas</a></li>
                <li className='p-2'><a href="#" className='rounded-md py-2 px-4 hover:bg-orange-600'>Papeleria</a></li>
                <li className='p-2'><a href="#" className='rounded-md py-2 px-4 hover:bg-orange-600'>Tazones</a></li>
                <li className='p-2'><a href="#" className='rounded-md py-2 px-4 hover:bg-orange-600'>Cojines</a></li>
            </ul>
        </nav>
    )
}
