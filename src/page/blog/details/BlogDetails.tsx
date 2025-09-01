/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";
import CommentBlog from "./Comment";
import { FaRegEye } from "react-icons/fa";


const Public = import.meta.env.VITE_API_URL;

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
                const response = await axios.post(`${Public}/blog-details-all`, { id })
                // const response = await axios.get(`${Public}/blog-details-all/${id}`)

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
            <Navbar />
            <div className="flex flex-col items-center justify-center mx-auto mt-primary" >
                <div className="mb-sec px-2 lg:p-0  ">
                    <div>
                        <img src={blogs.photoUrl} alt="Blog image" className="w-[100%] h-[500px] rounded-2xl object-cover " />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <h2 className="text-lg sm:text-2xl text-white font-bold mt-2">{blogs.title}</h2>
                        <div className="flex items-center gap-3">
                            <FaRegEye className="text-amber-500 text-2xl" />
                            <p>{blogs.View}</p>
                        </div>
                    </div>
                    <p className="mt-3 w-full sm:w-[80%] text-sm sm:text-base ">{blogs.SortDes}</p>

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
                </div>

                <div
                    className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto bg-[#0c0c0c7a] rounded-2xl p-6 "
                    dangerouslySetInnerHTML={{ __html: safeHtml }}
                />
                {/* coment section */}
                <div className="flex flex-col items-center mt-sec mb-sec">
                    <CommentBlog MyBlogData={blogs} />
                </div>
            </div>
            <Footer />
        </div>
    )
}