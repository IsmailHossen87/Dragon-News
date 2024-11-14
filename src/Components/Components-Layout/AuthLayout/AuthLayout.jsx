import { Outlet } from "react-router-dom";
import Navbar from "../../LayOuts/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-sans bg-[#F3F3F3] py-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;