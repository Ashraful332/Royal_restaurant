import { Link } from "react-router";
import Arrow from "../../assets/image/Popular/arrow.svg";
import "./home.css"

const Our_Blog = () => {
    // Blog Data Store in Variable
    const blogs = [
        {
            _id: "68b7ef0cd44644f456bb239a",
            id: 1,
            date: "August 6, 2025",
            title: "The Best Restaurant in Town - for 16 Years",
            description: "For 16 years, our restaurant has been the heart of great taste and hospitality. With over 70 delicious menu items, skilled chefs, and a clean, welcoming space, we proudly serve healthy food with love.",
            comments: 165,
            views: 1265,
            image: "https://i.ibb.co.com/CsJCQp8h/63baf8d9f11099476361b130-Rectangle-600.png",
            reverse: false,
        },
        {
            _id: "68b7ed4dd44644f456bb2399",
            id: 2,
            date: "August 5, 2025",
            title: "Fuel Your Body with Healthy Food",
            description: "Healthy food is the foundation of a strong body and a sharp mind. By choosing the right meals, you can improve your energy, mood, and overall well-being.",
            comments: 98,
            views: 850,
            image: "https://i.ibb.co.com/84SbdhXT/63819251c50a511441758a4f-Rectangle-27.png",
            reverse: true,
        },
    ];

    return (
        <div className="flex-center mt-high max-w-[1170px] h-auto mx-auto pt-4">
            <p className="text-[14px] ">Our Blog</p>
            <h3 className="text-header mb-primary">Recent Articles</h3>

            {/* Loop through blog data */}
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className={`flex flex-col ${blog.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center lg:items-start gap-10 mb-sec`}
                >
                    <div className="w-auto md:w-[50%] mx-auto h-auto sm:h-[357px] overflow-hidden object-center relative">
                        <img src={blog.image} alt={blog.title} className="hover-image-blog" />
                    </div>
                    <div className="w-auto md:w-[50%]">
                        <p>{blog.date}</p>
                        <h3 className="text-white font-bold text-lg md:text-2xl mt-2 mb-4">{blog.title}</h3>
                        <p className="font-semibold text-sm sm:text-[16px] ">{blog.description}</p>
                        <div className="flex items-center text-center justify-between w-[80%] lg:w-[50%] mt-4 mb-6 text-sm">
                            <p>Comments {blog.comments}</p>
                            <p>View {blog.views}</p>
                        </div>
                        <Link 
                        to={`/blog/${blog._id}`}
                        className="Read-Now">
                            Read Now
                        </Link>
                    </div>
                </div>
            ))}

            <Link to='/menu' className="flex justify-center mx-auto Explore-blog pb-[var(--margin-primary)]">
                Explore All Food
                <img src={Arrow} alt="star" className="ml-2" />
            </Link>
        </div>
    );
};

export default Our_Blog;
