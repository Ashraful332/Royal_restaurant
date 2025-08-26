import { useEffect, useState } from "react";
import AdminNav from "../components/navigation/AdminNav";
import SideBar from "../components/navigation/SideBar";
import axios from "axios";

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type Blog = {
    _id: string;
    title: string;
    PhotoUrl: string;
    description: number;
};



const AllBlog = () => {

    const [blog, setBlog] = useState<Blog[]>([]);

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await axios.get(`${AdminUrl}/all-blog`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }
        fetchMenu();
    }, []);

    return (
        <div className="flex bg-admin-img">
            <SideBar />
            <div className="h-screen w-[100%] overflow-y-scroll scrollbar-thin ">
                <AdminNav />
                <div>
                    <div>
                        {blog.map((blog)=>(
                            <div key={blog._id}>
                                <img src={blog.PhotoUrl} alt='Blog image' />
                                <p>title: {blog.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;