import { Link } from "react-router";
import Logo from "../../assets/image/Hero/logo.svg"
import Menu from "../../assets/icon/menu.svg"
import "./nav.css"


const Navbar = () => {
    return (
        <nav className="max-w-[1170px] flex-row-center justify-between m-auto font-normal mt-[30px] mb-5 ">
            <div className="hidden-nav-show gap-[27px] ">
                <Link to='/'>Home</Link>
                <Link to='/'>Menu</Link>
                <Link to='/'>About us</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contact</Link>
            </div>
            <div>
                <img src={Menu} alt="menu" className="w-6 h-6 text-white lg:hidden menu-svg-icon " />
            </div>
            <div>
                <img src={Logo} alt="logo" className="w-[53px] h-[55px] " />
            </div>
            <div className="flex-row-center gap-5">
                <p className="hidden sm:flex">
                    11:24 we're open
                </p>
                <Link to='/' className="Table-Reservation text-sm sm:text-[16px] ">
                    Table Reservation
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;