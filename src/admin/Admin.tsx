import "./admin.css"
import AdminFooter from "./components/navigation/AdminFooter"
import AdminNav from "./components/navigation/AdminNav"
import SideBar from "./components/navigation/SideBar"

export default function Admin() {
    return(
        <div className="flex bg-admin-img">
            <SideBar/>
            <div className="h-screen w-[100%] overflow-y-scroll scrollbar-thin ">
                <AdminNav/>
                <div>
                    content
                </div>
                <AdminFooter/>
            </div>
        </div>
    )
}