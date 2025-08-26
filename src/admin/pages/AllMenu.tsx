import { useEffect, useState } from "react";
import AdminNav from "../components/navigation/AdminNav";
import SideBar from "../components/navigation/SideBar";
import axios from "axios";

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type Menu = {
  _id: string;
  foodName: string;
  PhotoUrl: string;
  price: number;
  details: string;
  rating: number;
  type: string;
};

const AllMenu = () => {
  const [menu, setMenu] = useState<Menu[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await axios.get(`${AdminUrl}/all-menu`);
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }
    fetchMenu();
  }, []);

  return (
    <div className="flex bg-admin-img">
      <SideBar />

      {/* Main Content */}
      <div className="flex flex-col h-screen w-full overflow-y-auto">
        <AdminNav />

        {/* Page Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6 ">
            All Menu Items
          </h1>

          {/* Menu Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {menu.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image */}
                <img
                  src={item.PhotoUrl}
                  alt={item.foodName}
                  className="w-full h-72 object-cover rounded-t-xl"
                />

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {item.foodName}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.details}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-indigo-600 font-medium">
                      ${item.price}
                    </span>
                    <span className="text-yellow-500 font-medium">
                      ⭐ {item.rating}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">Type: {item.type}</p>
                  <div className="flex items-center gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all">Edit</button>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllMenu;
