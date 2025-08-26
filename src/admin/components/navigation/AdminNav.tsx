import { useState } from "react";
import { useLocation } from "react-router";
import { FaRegBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function AdminNav() {
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Current path (like "/add-blog" → "Add Blog")
  const currentPath = location.pathname.replace("/", "").replace("-", " ") || "Dashboard";

  return (
    <header className="sticky top-0 z-20 px-6 py-3 flex items-center justify-between">
      {/* Current Path */}
      <h2 className="text-lg font-semibold capitalize ">
        {currentPath}
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 border rounded-lg  text-sm focus:outline-none focus:ring focus:ring-indigo-400"
        />

        {/* Settings Dropdown */}
        <div className="relative text-gray-700">
          <button
            onClick={() => {
              setShowSettings(!showSettings);
              setShowNotifications(false);
            }}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaGear className="text-lg" />
          </button>
          {showSettings && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 text-sm">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Change Password
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Change Profile Photo
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Change Admin Name
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Manage Menus
              </button>
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative text-gray-700">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowSettings(false);
            }}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaRegBell className="text-lg" />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 text-sm">
              <p className="px-4 py-2 border-b font-medium text-gray-600">
                Notifications
              </p>
              <div className="max-h-48 overflow-y-auto">
                <p className="px-4 py-2 hover:bg-gray-100">📩 New reservation request</p>
                <p className="px-4 py-2 hover:bg-gray-100">🍽️ Order #1023 completed</p>
                <p className="px-4 py-2 hover:bg-gray-100">✏️ Blog post updated</p>
                <p className="px-4 py-2 hover:bg-gray-100">⭐ New review received</p>
              </div>
            </div>
          )}
        </div>

        {/* Admin Info */}
        <p className="font-medium ">Admin</p>
        <img
          src="https://i.ibb.co.com/RGr7rWHD/comrade.png"
          alt="admin photo"
          className="w-10 h-10 object-cover rounded-full border"
        />
      </div>
    </header>
  );
}
