import { Link } from "react-router";


export default function SideBar() {
    return(
        <div className=" hidden w-0 md:w-[10%] lg:w-[250px] md:flex flex-col items-center admin-bg h-screen ">
            <Link className="hover:underline" to='/admin'>admin</Link>
            <Link className="hover:underline" to='/add-menu'>add menu</Link>
            <Link className="hover:underline" to='/add-blog'>add blog</Link>
            <Link className="hover:underline" to='/all-menu'>all menu</Link>
            <Link className="hover:underline" to='/all-blog'>all blog</Link>
            <Link className="hover:underline" to='/all-order'>all order</Link>
            <Link className="hover:underline" to='/tables'>table</Link>
            <Link className="hover:underline" to='/reservation'>reservation</Link>
            <Link className="hover:underline" to='/change-pass'>change password</Link>
            <Link className="hover:underline" to='/mails'>mail</Link>
            <Link className="hover:underline" to='/reviews'>reviews</Link>
            <Link className="hover:underline" to='/profile'>profile</Link>
        </div>
    )
}

