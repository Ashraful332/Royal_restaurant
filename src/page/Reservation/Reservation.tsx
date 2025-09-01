import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import { IoCall } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Reservation = () => {
    // Handle form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // ✅ Show toast message
        toast.success("Table reserved successfully! 🎉");

        // ✅ Reset form
        e.currentTarget.reset();
    };

    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar />
            <div className="">
                <div className="Online-Reservation mb-primary">
                    <div className="p-6 rounded-2xl bg-[#0000002f] backdrop-blur-[10px] shadow-xl max-w-4xl mx-auto">
                        <h2 className="text-header text-white  mb-2">
                            Online Reservation
                        </h2>
                        <p className="text-gray-300 text-center mb-6">
                            Book your table for lunch or dinner.
                        </p>

                        {/* ✅ form submit handler */}
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {/* Name */}
                            <div className="relative">
                                <FaUserCircle className="absolute top-3 left-3 text-white text-xl" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <MdAlternateEmail className="absolute top-3 left-3 text-white text-xl" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <IoCall className="absolute top-3 left-3 text-white text-xl" />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Your Phone"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Address */}
                            <div className="relative">
                                <FaLocationDot className="absolute top-3 left-3 text-white text-xl" />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Your Address"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Dropdown (Meal Type) */}
                            <div className="relative">
                                <select
                                    name="meal"
                                    required
                                    className="w-full pl-3 pr-4 py-2 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-amber-500"
                                >
                                    <option value="" disabled selected>
                                        Select Meal
                                    </option>
                                    <option value="breakfast" className="text-gray-800">
                                        Breakfast
                                    </option>
                                    <option value="lunch" className="text-gray-800">
                                        Lunch
                                    </option>
                                    <option value="dinner" className="text-gray-800">
                                        Dinner
                                    </option>
                                </select>
                            </div>

                            {/* Date */}
                            <div className="relative">
                                <MdOutlineDateRange className="absolute top-3 left-3 text-white text-xl" />
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-full text-center mt-6">
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg transition-all"
                                >
                                    Reserve Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* ✅ Toast Container */}
                <Toaster position="top-center" reverseOrder={false} />

                <div className="max-w-[1170px] mx-auto text-primary  flex flex-col lg:flex-row w-[100%] items-center lg:items-start justify-center lg:justify-between mb-sec ">
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
            <Footer />
        </div>
    );
};

export default Reservation;
