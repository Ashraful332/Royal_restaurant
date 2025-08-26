import AdminFooter from "../components/navigation/AdminFooter";
import AdminNav from "../components/navigation/AdminNav";
import SideBar from "../components/navigation/SideBar";


const AllMenu = () => {
    return (
        <div className="flex bg-admin-img">
            <SideBar />
            <div className="h-screen w-[100%] overflow-y-scroll scrollbar-thin ">
                <AdminNav />
                <div>
                    <p>neet menu</p>
                    <p>neet order</p>
                    <p>total visitor</p>
                    <p>total incume</p>
                    <p>total order</p>
                    <p>all mail</p>
                </div>
                <AdminFooter />
            </div>
        </div>
    );
};

export default AllMenu;