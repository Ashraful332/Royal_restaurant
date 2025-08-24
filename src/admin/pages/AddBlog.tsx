import type { FormEvent } from "react";
import SideBar from "../components/navigation/SideBar";
import AdminNav from "../components/navigation/AdminNav";
import AdminFooter from "../components/navigation/AdminFooter";

const AddBlog = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      title: (form.Title as HTMLInputElement).value,
      photoUrl: (form.photoUrl as HTMLInputElement).value,
      description: (form.Description as HTMLTextAreaElement).value,
    };

    console.log("Blog Data:", data);

    // 👉 এখানে তুমি axios/fetch দিয়ে সার্ভারে ডেটা পাঠাতে পারবে
    // axios.post("/api/blogs", data)
    //   .then(res => console.log("Blog saved:", res.data))
    //   .catch(err => console.error(err));

    form.reset(); // সাবমিটের পরে ফর্ম রিসেট হয়ে যাবে
  };

  return (
    <div className="flex bg-admin-img">
      <SideBar />
      <div className="h-screen w-full overflow-y-scroll scrollbar-thin">
        <AdminNav />
        <div className="flex justify-center items-center min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-md gap-4 p-6 bg-white shadow-lg rounded-2xl"
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

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium">Description</span>
              <textarea
                name="Description"
                rows={4}
                required
                className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>

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
