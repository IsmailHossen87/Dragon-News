import { Link } from "react-router-dom";
import user from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between py-3">
            <div className=""></div>
            <div className="flex space-x-3 items-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/career'}>Career</Link>
            </div>
            <div className="flex items-center gap-2">
                <div><img src={user} alt="" /></div>
                <Link to={'/auth/login'} className="btn btn-neutral border-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;