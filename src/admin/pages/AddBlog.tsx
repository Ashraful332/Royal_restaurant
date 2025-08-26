import { useState, type FormEvent } from "react";
import SideBar from "../components/navigation/SideBar";
import AdminNav from "../components/navigation/AdminNav";
import AdminFooter from "../components/navigation/AdminFooter";
import axios from "axios";
import Editor from "../../components/ui/editor/JoditEditor";
// import Editor from '../components/ui/editor/JoditEditor'

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

const AddBlog = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const BlogData = {
      title: (form.Title as HTMLInputElement).value,
      photoUrl: (form.photoUrl as HTMLInputElement).value,
      description: content,
    };

    console.log("Blog Data:", BlogData);
    try {
      const response = axios.post(`${AdminUrl}/add-blog`, BlogData)
      console.log('the blog is add :', response);

    } catch (error) {
      console.error("error is coming on post blog", error)
    }
    setContent(''); // submit from was resat
    form.reset(); // reset editor
  };

  return (
    <div className="flex bg-admin-img">
      <SideBar />
      <div className="h-screen w-full overflow-y-scroll scrollbar-thin">
        <AdminNav />
        <div className="flex justify-center items-center min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-xl gap-4 p-6 bg-white text-black shadow-lg rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Add New Blog Post
            </h2>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium">Blog Title</span>
              <input
                type="text"
                name="Title"
                required
                className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium">Photo URL</span>
              <input
                type="text"
                name="photoUrl"
                required
                className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>

            <Editor value={content} onChange={setContent} />

            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition"
            >
              Submit
            </button>
          </form>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AddBlog;
