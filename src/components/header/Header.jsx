import logo_perrita from '../../assets/img/logo/logo_perrita.png';
import titulo_y_eslogan from '../../assets/img/logo/titulo_y_eslogan.png';
import logo_gatita from '../../assets/img/logo/logo_gatita.png';
import { NavBar } from '../navBar/NavBar';

export const Header = () => {
    return (
        <header>
            <div className="flex justify-center items-center py-4">
                <img src={logo_perrita} alt="Logo" />
                <img src={titulo_y_eslogan} alt="Logo" />
                <img src={logo_gatita} alt="Logo" />
            </div>

            <NavBar/>
        </header>
    );
};
