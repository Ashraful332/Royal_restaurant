import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";


const Reservation = () => {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar/>
            <div className="">
                <div className="Online-Reservation mb-primary">
                    <div>
                        
                    </div>
                </div>
                <div className="max-w-[1170px] mx-auto text-primary  flex flex-col lg:flex-row w-[100%] items-center lg:items-start
                 justify-center lg:justify-between mb-sec ">
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-white font-black text-2xl">London</h3>
                        <p>Silk St, Barbican, London EC2Y 8DS</p>
                        <p>gamil1234@gmail.com</p>
                        <p>+00 000 0000 0000</p>
                        <button className="Order-btn mt-5">Get Directions</button>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-white font-black text-2xl">Sydney</h3>
                        <p>Silk St, Barbican, London EC2Y 8DS</p>
                        <p>gamil1234@gmail.com</p>
                        <p>+00 000 0000 0000</p>
                        <button className="Order-btn mt-5">Get Directions</button>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-white font-black text-2xl">Tokyo</h3>
                        <p>Silk St, Barbican, London EC2Y 8DS</p>
                        <p>gamil1234@gmail.com</p>
                        <p>+00 000 0000 0000</p>
                        <button className="Order-btn mt-5">Get Directions</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Reservation;