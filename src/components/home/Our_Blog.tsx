import Arrow from "../../assets/image/Popular/arrow.svg";
import "./home.css"

const Our_Blog = () => {
    return (
        <div className="flex-center mt-high max-w-[1170px] h-auto  mx-auto pt-4">
            <p className="text-[14px] ">Our Blog</p>
            <h3 className="text-6xl font-bold mb-primary">Recent Articles</h3>
            <div className=" flex flex-col lg:flex-row gap-10 mb-sec ">
                <div className="w-[50%] mx-auto h-[357px] overflow-hidden object-center relative ">
                    <img src="https://i.ibb.co.com/mFGtpR3m/63786d3454cc507817e7bd6c-1.png" alt="food" 
                    className="hover-image-blog"/>
                </div>
                <div className="w-[50%] ">
                    <p>August 6, 2025</p>
                    <h3 className="text-white font-bold text-2xl mt-2 mb-4 ">The Most Expensive Cup of Coffee in the Usa</h3>
                    <p className="text-[#ffffffef] ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.
                    </p>
                    <div className="flex items-center text-center justify-between w-[50%] mt-4 mb-6 text-sm">
                        <p>Comments 165</p>
                        <p>View 1265</p>
                    </div> 
                    <button className="Read-Now">Read Now</button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse gap-10 mb-sec ">
                <div className="w-[50%] mx-auto h-[357px] overflow-hidden object-center relative ">
                    <img src="https://i.ibb.co.com/84SbdhXT/63819251c50a511441758a4f-Rectangle-27.png" alt="food" 
                    className="hover-image-blog"/>
                </div>
                <div className="w-[50%] ">
                    <p>August 6, 2025</p>
                    <h3 className="text-white font-bold text-2xl mt-2 mb-4 ">The Most Expensive Cup of Coffee in the Usa</h3>
                    <p className="text-[#ffffffef] ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.
                    </p>
                    <div className="flex items-center text-center justify-between w-[50%] mt-4 mb-6 text-sm">
                        <p>Comments 165</p>
                        <p>View 1265</p>
                    </div> 
                    <button className="Read-Now">Read Now</button>
                </div>
            </div>
            <button className=" flex justify-center mx-auto Explore-blog pb-[var(--margin-primary)] ">
                Explore All Food
                <img src={Arrow} alt="star" className="ml-2" />
            </button>
        </div> 
    );
};

export default Our_Blog;