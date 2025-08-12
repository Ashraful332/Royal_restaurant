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
                        <div className="w-[40%] flex flex-col gap-5 ">
                            <h3 className="text-hed-introB ">Everything you need to know about the growing role of AI in restaurants</h3>
                            <p>August 6, 2022 . By Admin</p>
                            <p>You are sitting in your favorite restaurant and have ordered on a tablet on your table. A few seconds after placing the order, a notification will appear in your messaging app.</p>
                            <button>Read Now</button>
                        </div>
                    </div>
                </div>
                <div></div>
                <div>
                    <div>
                        <img src="" alt="image" />
                    </div>
                    <div>
                        <h4>Subscribe Newsletter & get letest news</h4>
                        <p>
                            Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur venenatis, nisl in bib endum commodo, sapien justo cursus are urna, quis porta mauris elit finibus nulla.
                        </p>
                        <input type="email" name="" id="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;