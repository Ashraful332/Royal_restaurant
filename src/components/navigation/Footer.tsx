import { Link } from "react-router";
import Logo from "../../assets/image/Hero/logo.svg"
import Apple from "../../assets/icon/apple.svg"
import Play from "../../assets/icon/play.svg"


const Footer = () => {
    return (
        <footer className="max-w-[1170px] flex justify-between m-auto pt-[var(--margin-primary)] ">
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
            <div className="flex flex-row">
                <div className="flex-center-start">
                    <h3>Usefull Link</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Services</Link>
                    <Link to='/'>Booking</Link>
                    <Link to='/'>Menu</Link>
                </div>
                <div className="flex-center-start">
                    <h3>Contact Info</h3>
                    <Link to='/'>Silk St, Barbican, London EC2Y 8DS, UK</Link>
                    <Link to='/'>info@example.com</Link>
                    <Link to='/'>800-123-45-678</Link>
                </div>
                <div className="flex-center-start">
                    <h3>Follow Us</h3>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Linkedin</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div className="flex-center-start">
                    <h3>Legal</h3>
                    <Link to='/'>Website by uihut.com</Link>
                    <Link to='/'>©2022. All Rights Reserved</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;