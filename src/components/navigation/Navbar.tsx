import { Link } from "react-router";
import Logo from "../../assets/image/Hero/logo.svg"


const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/'>Menu</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contact</Link>
            </div>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <p>
                    11:24 we're open
                </p>
                <Link to='/'>
                    Table Reservation
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;