import { useEffect, useState } from "react";
import AdminNav from "../components/navigation/AdminNav";
import SideBar from "../components/navigation/SideBar";
import axios from "axios";
import { MdEdit, MdDeleteForever } from "react-icons/md";

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type Blog = {
  _id: string;
  title: string;
  photoUrl: string;
  description: string;
};

const AllBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(`${AdminUrl}/all-blog`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="flex bg-admin-img min-h-screen">
      <SideBar />
      <div className="flex-1 h-screen overflow-y-scroll scrollbar-thin">
        <AdminNav />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={blog.photoUrl}
                alt="Blog"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {blog.title}
                </h3>
                <div className="flex justify-between items-center">
                  <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
                    View Details
                  </button>
                  <div className="flex gap-2">
                    <button className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition">
                      <MdEdit className="text-white text-lg" />
                    </button>
                    <button className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition">
                      <MdDeleteForever className="text-white text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {blogs.length === 0 && (
            <p className="text-gray-500 text-center col-span-full">
              No blogs found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
