import { useState } from "react";
import "./contact.css"
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Call from "../../assets/icon/call.svg";
import Mail from "../../assets/icon/mail.svg";
import Location from "../../assets/icon/location.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };


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
                        <button className="con-button-main mb-primary ">View in google maps</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/j9CXBRt9/a-contact-image.png" alt="photo" />
                    </div>
                </div>
                <div className="mt-high flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto gap-5 lg:gap-0  w-[99%] lg:w-[80%]  ">
                    <div className="flex flex-col items-start gap-4">
                        <h4 className="con-mail-hed">Contact Us</h4>
                        <p className="text-white">For general enquiries please email: <span className="text-amber-500"> info@gmail.com</span></p>
                        <p className="text-white">Reserve by email: <span className="text-amber-500"> gmail1234@gamil.com</span></p>
                        <p className="text-white">call: <span className="text-amber-500">+8801614871378</span> </p>
                        <p className="mt-3 text-[#ffffffec] ">Opening hours:</p>
                        <p>Mon - Thu: 10.00 am - 01:00 am</p>
                        <p>Fri - Sun: 10:00 am - 02:00 am</p>
                    </div>
                    <div className="container px-4 mx-auto ">
                        <div className="mx-auto">
                        <div className="max-w-md mx-auto px-8 ">
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Contact Us</h2>
                            <div onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-300 mb-1" htmlFor="name">
                                Your Name
                                </label>
                                <input
                                className="w-full px-4 py-2  text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 border border-gray-600 focus:border-yellow-400"
                                placeholder="Enter your name"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 mb-1" htmlFor="email">
                                Your Email
                                </label>
                                <input
                                className="w-full px-4 py-2  text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 border border-gray-600 focus:border-yellow-400"
                                placeholder="Enter your email"
                                name="email"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 mb-1" htmlFor="message">
                                Your Message
                                </label>
                                <textarea
                                className="w-full px-4 py-2  text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 border border-gray-600 focus:border-yellow-400 resize-none"
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                />
                            </div>
                            <button
                                className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-300 focus:bg-yellow-300 transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Send Message
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;