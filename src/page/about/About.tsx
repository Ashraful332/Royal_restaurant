import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import barger from "../../assets/icon/barger.svg";
import car from "../../assets/icon/barger.svg";
import chef from "../../assets/icon/barger.svg";




const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex-center text-primary max-w-[1100px] mx-auto">
                <div className="mb-sec">
                    <h2 className="text-xl lg:text-4xl font-bold text-white w-[50%] mb-5 ">We are a mexican restaurant makes delicious.</h2>
                    <p className="mb-3 ">
                        Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers. Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers. Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers.
                    </p>
                    <hr  />
                </div>
                <div className="mb-high">
                    <img src="https://i.ibb.co.com/CsJCQp8h/63baf8d9f11099476361b130-Rectangle-600.png" alt="photo" />
                    <img src="https://i.ibb.co.com/0NfdFd7/russia-b.jpg" alt="photo" />
                    <img src="https://i.ibb.co.com/yFmZ1yxh/637c6021b5d69d650c57ebac-Rectangle-35.png" alt="photo" />
                    <div>
                        <h3 className="text-xl lg:text-4xl font-bold text-white w-[50%] mb-5 ">The story of our first restaurant branch</h3>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-[100%] ">
                    <div>
                        <div className="flex flex-row gap-5 mb-10 w-[90vw] sm:w-[70%] ">
                            <img src={barger} alt="icon" />
                            <div>
                                <h4 className="text-white font-bold text-xl">Delicious Cuisine</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 mb-10 w-[90vw] sm:w-[70%] ">
                            <img src={car} alt="icon" />
                            <div>
                                <h4 className="text-white font-bold text-xl">Fast Delivery</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 mb-10 w-[90vw] sm:w-[70%] ">
                            <img src={chef} alt="icon" />
                            <div>
                                <h4 className="text-white font-bold text-xl">Professional Chef</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://i.ibb.co.com/m5z8ybv4/637c8dbf3b83de6bba736467-Rectangle-38.png" alt="photo" />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;