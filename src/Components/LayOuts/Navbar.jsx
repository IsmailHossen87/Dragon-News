import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div className="flex justify-between py-3">
            <div className="font-bold text-xl">{user && user.email}</div>
            <div className="flex space-x-3 items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/career'}>Career</Link>
            </div>
            <div className="flex items-center gap-2">
                <div><img src={user} alt="" /></div>
                {user && user.email ? <button onClick={logOut} className="btn btn-neutral border-none"> Log Out</button> : <Link to={'/auth/login'} className="btn btn-neutral border-none">Login</Link>}
               
            </div>
        </div>
    );
};

export default Navbar;