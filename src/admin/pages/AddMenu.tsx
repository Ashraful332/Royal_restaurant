import { type FormEvent } from "react";
import SideBar from "../components/navigation/SideBar";
import AdminNav from "../components/navigation/AdminNav";
import AdminFooter from "../components/navigation/AdminFooter";

const AddMenu = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      foodName: (form.FoodName as HTMLInputElement).value,
      price: (form.price as HTMLInputElement).value,
      details: (form.details as HTMLInputElement).value,
      rating: (form.rating as HTMLInputElement).value,
      type: (form.type as HTMLInputElement).value,
    };
    console.log("Form Data:", data);
    // 👉 এখানে তুমি axios/fetch দিয়ে সার্ভারে পাঠাতে পারবে
  };

  return (
    <div className="flex bg-admin-img">
        <SideBar/>
        <div className="h-screen w-[100%] overflow-y-scroll scrollbar-thin ">
            <AdminNav/>
             <div className="flex justify-center items-center min-h-screen">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full max-w-md gap-4 p-6 bg-white shadow-lg rounded-2xl"
                >
                    <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
                    Add New Menu Item
                    </h2>

                    <label className="flex flex-col">
                    <span className="text-gray-700 font-medium">Food Name</span>
                    <input
                        type="text"
                        name="FoodName"
                        required
                        className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    </label>

                    <label className="flex flex-col">
                    <span className="text-gray-700 font-medium">Price</span>
                    <input
                        type="number"
                        name="price"
                        required
                        className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    </label>

                    <label className="flex flex-col">
                    <span className="text-gray-700 font-medium">Details</span>
                    <textarea
                        name="details"
                        rows={3}
                        className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    </label>

                    <label className="flex flex-col">
                    <span className="text-gray-700 font-medium">Rating</span>
                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        step="0.1"
                        className="bg-gray-100 border rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    </label>

                    <label className="flex flex-col">
                    <span className="text-gray-700 font-medium">Type</span>
                    <input
                        type="text"
                        name="type"
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
            <AdminFooter/>
        </div>
    </div>
  );
};

export default AddMenu;
