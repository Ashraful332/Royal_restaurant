// import AdminFooter from "../components/navigation/AdminFooter";
import { useEffect, useState } from "react";
import AdminNav from "../components/navigation/AdminNav";
import SideBar from "../components/navigation/SideBar";
import axios from "axios";

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type Menu = {
    _id: string,
    foodName: string,
    PhotoUrl: string,
    price: number,
    details: string,
    rating: number,
    type: string
}

const AllMenu = () => {
    const [menu, setMenu] = useState<Menu[]>([]);

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await axios.get(`${AdminUrl}/all-menu`)
                setMenu(response.data)
            } catch (error) {
                console.error("the error is coming", error)
            }
        }
        fetchMenu()
    }, [])
    return (
        <div className="flex bg-admin-img">
            <SideBar />
            <div className="h-screen w-[100%] overflow-y-scroll scrollbar-thin ">
                <AdminNav />
                <div>
                    <div>
                        {menu.map((menu) => (
                            <div key={menu._id}>
                                <img src={menu.PhotoUrl} alt={menu.foodName} />
                                <p>{menu.foodName}</p>
                                <p>{menu.price}</p>
                                <p>{menu.details}</p>
                                <p>{menu.rating}</p>
                                <p>{menu.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <AdminFooter /> */}
            </div>
        </div>
    );
};

export default AllMenu;