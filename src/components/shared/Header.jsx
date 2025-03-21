import logo_perrita from '../../assets/img/logo/logo_perrita.png';
import titulo_y_eslogan from '../../assets/img/logo/titulo_y_eslogan.png';
import logo_gatita from '../../assets/img/logo/logo_gatita.png';
import { NavBar } from '../shared/NavBar';

export const Header = () => {
    return (
        <header className="pb-6">
            <div className="flex flex-wrap justify-center items-center py-4 gap-4">
                <img src={logo_perrita} alt="Logo" className="w-16 md:w-32 xl:w-48" />
                <img src={titulo_y_eslogan} alt="Logo" className="w-48 md:w-96 xl:w-144" />
                <img src={logo_gatita} alt="Logo" className="w-16 md:w-32 xl:w-48" />
            </div>
            <NavBar />
        </header>
    );
};
