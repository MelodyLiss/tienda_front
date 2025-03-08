import { Outlet } from "react-router-dom";
import { NavClientTop } from "../components/shared/NavClientTop";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavClientTop />
            <Header />
            <Outlet />{/* Aquí se renderizan las páginas */}
            <Footer />
        </div>
    );
};


