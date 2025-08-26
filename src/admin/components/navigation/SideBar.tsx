import { Link, useLocation } from "react-router";
import Logo from "../../../assets/icon/logoRR.png";

const navLinks = [
  { name: "Dashboard", path: "/admin" },
  { name: "Add Menu", path: "/add-menu" },
  { name: "Add Blog", path: "/add-blog" },
  { name: "All Menu", path: "/all-menu" },
  { name: "All Blog", path: "/all-blog" },
  { name: "All Orders", path: "/all-order" },
  { name: "Tables", path: "/tables" },
  { name: "Reservation", path: "/reservation" },
  { name: "Change Password", path: "/change-pass" },
  { name: "Mails", path: "/mails" },
  { name: "Reviews", path: "/reviews" },
  { name: "Profile", path: "/profile" },
];

export default function SideBar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col bg-gray-900 text-gray-200 w-0 md:w-[10%] lg:w-[250px] h-screen shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-3 py-6 border-b border-gray-700">
        <img src={Logo} alt="logo" className="w-12 h-12 object-contain" />
        <p className="text-sm">Royal Restaurant</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-6 px-4">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-gray-700 text-white font-medium"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
