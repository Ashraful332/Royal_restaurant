import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import "./blog.css"

const Blog = () => {
    return (
        <div className="text-primary max-w-screen overflow-x-hidden">
            <Navbar/>
            <div className="flex-center max-w-[1170px] mx-auto px-[14px] sm:px-[30px] mt-sec ">
                <div>
                    <div className="mb-sec">
                        <hr />
                         <h2 className="text-header-blog my-[30px] ">Restaurant Management & Growth Blog</h2>
                        <hr />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div>
                            <img src="https://i.ibb.co.com/CsJCQp8h/63baf8d9f11099476361b130-Rectangle-600.png" alt="" />
                        </div>
                        <div className="w-[90vw] sm:w-[70%] lg:w-[40%] flex flex-col items-start gap-5 ">
                            <h3 className="text-hed-introB ">Everything you need to know about the growing role of AI in restaurants</h3>
                            <p>August 6, 2022 . By Admin</p>
                            <p>You are sitting in your favorite restaurant and have ordered on a tablet on your table. A few seconds after placing the order, a notification will appear in your messaging app.</p>
                            <button className="blog-button-now mt-sec">Read Now</button>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="flex flex-col lg:flex-row gap-5 mt-high">
                    <div>
                        <img src="https://i.ibb.co.com/v40w4pRL/637b219c75082dada789af56-Rectangle-21.png" alt="image" />
                    </div>
                    <div className="w-[90vw] sm:w-[70%] lg:w-[40%] ">
                        <h4 className="text-header-blog2">Subscribe Newsletter & get letest news</h4>
                        <p >
                            Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur venenatis, nisl in bib endum commodo, sapien justo cursus are urna, quis porta mauris elit finibus nulla.
                        </p>
                        <div className=" mt-[10vh] lg:mt-[30vh] ">
                            <div className="relative">
                                <input
                                id="username"
                                name="username"
                                type="text"
                                className="border-b w-[90vw] lg:w-[400px] border-gray-300 py-1 focus:border-b-2 focus:border-amber-500 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-amber-500"
                                >Name</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;