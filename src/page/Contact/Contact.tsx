import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Call from "../../assets/icon/call.svg";
import Mail from "../../assets/icon/mail.svg";
import Location from "../../assets/icon/location.svg";
import "./contact.css"

const Contact = () => {
    return (
        <div className="text-primary max-w-screen overflow-x-hidden">
            <Navbar/>
            <div className="flex-center max-w-[1170px] mx-auto px-[14px] sm:px-[30px] mt-sec ">
                <div className="flex flex-col lg:flex-row w-[100%] justify-between ">
                    <div>
                        <h3 className="text-con-header">Where to find us</h3>
                        <p className="con-text-det mb-primary mt-[30px] ">  
                            The Patio Time Cafe is located on Silk Street, in the heart of London city, on the edge of Soho. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                        </p>
                        <p className="con-text-det">
                            The Patio Time Cafe is located on Silk Street, in the heart of London city, on the edge of Soho. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                        </p>
                        <div className="flex flex-col items-start gap-4 my-[var(--margin-primary)] ">
                            <div className="con-div-info">
                                <img src={Location} alt="icon" />
                                <p className="text-con-info">Silk St, Barbican, London EC2Y 8DS, UK</p>
                            </div>
                            <div className="con-div-info">
                                <img src={Mail} alt="icon" />
                                <p className="text-con-info">gmail1234@gmail.com</p>
                            </div>
                            <div className="con-div-info">
                                <img src={Call} alt="icon" />
                                <p className="text-con-info">+00-0000-00000</p>
                            </div>
                        </div>
                        <button className="con-button-main">View in google maps</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/j9CXBRt9/a-contact-image.png" alt="photo" />
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Contact Us</h3>
                        <p>For general enquiries please email: info@gmail.com</p>
                        <p>Reserve by email: gmail1234@gamil.com</p>
                        <p>call:+8801614871378</p>
                        <p>Opening hours:</p>
                        <p>Mon - Thu: 10.00 am - 01:00 am</p>
                        <p>Fri - Sun: 10:00 am - 02:00 am</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;