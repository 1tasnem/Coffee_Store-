import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="">
            <div className="h-16">
            <Navbar className="h-16"></Navbar>
            </div>
            <div className="min-h-[420px] py-12 container mx-auto px-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;