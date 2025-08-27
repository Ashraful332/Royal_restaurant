import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";


const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type BlogData = {
    _id: string,
    title: string,
    SortDes: string,
    photoUrl: string,
    description: string,
    View: string

}


function wrapIframe(html: string): string {
    // iframe ট্যাগ খুঁজে বের করে তার চারপাশে responsive div র‍্যাপ করো
    return html.replace(
        /<iframe.*?<\/iframe>/g,
        (match) => `<div class="responsive-iframe">${match}</div>`
    );
}



export default function BlogDetails() {
    const [blogs, setBlogs] = useState<BlogData | any>(null)
    const { id } = useParams(); // fecht the id of blog

    // fetch the data
    useEffect(() => {
        async function LoadData() {
            try {
                const response = await axios.post(`${AdminUrl}/blog-details`, { id })
                // const response = await axios.get(`${AdminUrl}/blog-details/${id}`)

                setBlogs(response.data)
                console.log(response.data);
            } catch (error) {
                console.error("the error is coming on load blog", error)
            }
        }
        LoadData()
    }, [id])

    if (!blogs) {
        return <p>Loading...</p>;
    }

    const safeHtml = wrapIframe(blogs.description);

    return (
        <div>
            <Navbar/>
            <div >
                <img src={blogs.photoUrl} alt="Blog image" />
                <p>{blogs.title}</p>
                <p>{blogs.SortDes}</p>
                <p>{blogs.View}</p>
                {/* Responsive iframe CSS */}
                <style>
                    {`
                .responsive-iframe {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 56.25%;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }
                .responsive-iframe iframe {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
                `}
                </style>
                <div
                    className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto bg-[#0c0c0c7a] rounded-2xl p-6 "
                    dangerouslySetInnerHTML={{ __html: safeHtml }}
                />
                {/* coment section */}
                <div className="flex flex-col items-center mt-sec mb-sec">
                    <div className="flex items-center gap-5 ">
                        <input type="text" name="coment" id="" className="border rounded-2xl py-1 px-2" />
                        <button className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl font-semibold hover:from-green-500 hover:to-blue-600 transition-all">comment</button>
                    </div>
                    <div className="flex gap-3 mt-sec">
                        <div>
                            <img src="https://i.ibb.co.com/GvWGMT4T/Screenshot-20250712-211018.png" alt="user photo" className="rounded-full w-12 h-12 " />
                        </div>
                        <div className="p-6 bg-[#0c0c0c7a] rounded-2xl ">
                            <div className=" flex justify-between text-center ">
                                <p className="text-xs font-semibold text-[#ffffffd2] ">name</p>
                                <p className="text-xs font-semibold text-[#ffffff70] ">date and time</p>
                            </div>
                            <div>
                                <p>commante text , my comment , user commant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}