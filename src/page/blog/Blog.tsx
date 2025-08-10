import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";


const Blog = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <div>
                        <hr />
                         <h2>Restaurant Management & Growth Blog</h2>
                        <hr />
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <h3>Everything you need to know about the growing role of AI in restaurants</h3>
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