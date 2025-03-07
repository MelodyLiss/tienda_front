import { Outlet } from "react-router-dom";
import { NavClientTop } from "../components/navClientTop/NavClientTop";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const LayoutMain = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavClientTop />
            <Header />
            <Outlet />{/* Aquí se renderizan las páginas */}
            <Footer />
        </div>
    );
};


