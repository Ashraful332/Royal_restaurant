import { Link } from "react-router";
import Logo from "../../assets/image/Hero/logo.svg"
import Apple from "../../assets/icon/apple.svg"
import Play from "../../assets/icon/play.svg"


const Footer = () => {
    return (
        <footer className="max-w-[1170px] flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-o justify-between m-auto pt-[var(--margin-primary)] text-primary ">
            <div className="flex-center gap-[var(--margin-primary)] ">
                <div className="flex-row-center gap-2">
                    <img src={Logo} alt="logo" />
                    <h2 className="text-2xl font-extrabold">Royal Restaurant</h2>
                </div>
                <div>
                    <p >Download the royal restaurant</p>
                    <p> app today.</p>
                    <div className="flex-row-center gap-3 mt-3">
                        <div>
                            <a href="#">
                                <img src={Apple} alt="apple stor" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={Play} alt="play stor" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between w-[100%] xl:w-[60%] gap-12 sm:gap-0 text-sm xl:text-base ">
                <div className="flex-center sm:flex-center-start gap-6">
                    <h3 className="footer-header">Usefull Link</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Services</Link>
                    <Link to='/'>Booking</Link>
                    <Link to='/'>Menu</Link>
                </div>
                <div className="flex-center sm:flex-center-start gap-6">
                    <h3 className="footer-header">Contact Info</h3>
                    <Link to='/' className="w-[197px] text-center sm:text-start ">Silk St, Barbican, 
                     London EC2Y 8DS, UK</Link>
                    <Link to='/'>info@example.com</Link>
                    <Link to='/'>800-123-45-678</Link>
                </div>
                <div className="flex-center sm:flex-center-start gap-6">
                    <h3 className="footer-header">Follow Us</h3>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Linkedin</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div className="flex-center sm:flex-center-start gap-6">
                    <h3 className="footer-header">Legal</h3>
                    <Link to='/'>Website by uihut.com</Link>
                    <Link to='/'>©2022. All Rights Reserved</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
