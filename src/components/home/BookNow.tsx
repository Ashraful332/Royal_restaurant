import { Link } from "react-router";

const BookNow = () => {
    return (
        <div className="flex-center max-w-[1100px] mx-auto mt-high px-4">
            <div className="flex flex-col sm:flex-row bg-primary shadow-lg overflow-hidden w-full">
                {/* Left Content */}
                <div className="flex flex-col justify-center p-8 sm:p-12 w-full sm:w-[50%] text-white">
                    <h2 className="text-2xl lg:text-4xl font-bold leading-snug">
                        Reserve Your Spot <br /> Book Now!
                    </h2>
                    <p className="mt-3 mb-12 text-sm sm:text-base text-white/90">
                        Secure your table today for a delightful experience with our special menu. 
                        Pick a date and reserve with just one click.
                    </p>
                    <div className="flex gap-4">
                        <Link to='/reservation' className="border-[2.5px] border-black text-primary px-4 py-2 text-black font-semibold hover:bg-amber-400 transition">
                            Set Date
                        </Link>
                        <Link
                            to="/reservation"
                            className="bg-black text-white px-5 py-2 font-semibold hover:bg-gray-800 transition"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full sm:w-[50%]">
                    <img
                        src="https://i.ibb.co/YF266N2s/638192069f6b477481e3a33f-Group-284.png"
                        alt="coffee"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookNow;
