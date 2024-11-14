import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center py-2'>
            <div >
                <img className='w-[320px]' src={logo} alt="" />
            </div>
            <h1 className='text-gray-400'>Journalism Without Fear or Favour</h1>
            <p >{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;