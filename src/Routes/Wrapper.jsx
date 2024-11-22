import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
