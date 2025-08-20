import { Link } from "react-router";
import Logo from "../../assets/image/Hero/logo.svg"
import Menu from "../../assets/icon/menu.svg"
import "./nav.css"
import { useState } from "react";

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    
    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setIsMenu(false);
    };
    
    return (
        <nav className="max-w-[1170px] flex-row-center justify-between m-auto font-normal mt-[30px] mb-5 relative px-[14px] sm:px-[30px] text-primary">
            <div className="hidden-nav-show gap-[27px]">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About us</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            
            <button 
                onClick={() => setIsMenu(!isMenu)}
                className="z-50 relative"
                aria-label="Toggle menu"
            >
                <img src={Menu} alt="menu" className="w-6 h-6 text-white lg:hidden menu-svg-icon" />
            </button>
            
            <div>
                <img src={Logo} alt="logo" className="w-[53px] h-[55px]" />
            </div>
            
            <div className="flex-row-center gap-5">
                <p className="hidden sm:flex">
                    11:24 we're open
                </p>
                <Link to='/reservation' className="Table-Reservation text-sm sm:text-[16px]">
                    Table Reservation
                </Link>
            </div>
            
            {/* Backdrop overlay */}
            {isMenu && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsMenu(false)}
                />
            )}
            
            {/* Sidebar menu */}
            <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#17171c] shadow-lg z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
                isMenu ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <img src={Logo} alt="logo" className="w-[40px] h-[42px ml-7 ]" />
                    <button 
                        onClick={() => setIsMenu(false)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Navigation links */}
                <div className="flex flex-col py-4">
                    <Link 
                        to='/' 
                        className="px-6 py-4 text-primary   border-gray-100"
                        onClick={handleLinkClick}
                    >
                        Home
                    </Link>
                    <Link 
                        to='/menu' 
                        className="px-6 py-4 text-primary   border-gray-100"
                        onClick={handleLinkClick}
                    >
                        Menu
                    </Link>
                    <Link 
                        to='/about' 
                        className="px-6 py-4 text-primary   border-gray-100"
                        onClick={handleLinkClick}
                    >
                        About us
                    </Link>
                    <Link 
                        to='/blog' 
                        className="px-6 py-4 text-primary   border-gray-100"
                        onClick={handleLinkClick}
                    >
                        Blog
                    </Link>
                    <Link 
                        to='/contact' 
                        className="px-6 py-4 text-primary "
                        onClick={handleLinkClick}
                    >
                        Contact
                    </Link>
                </div>
                
                {/* Footer section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                    <div className="text-center text-sm text-gray-600 mb-4">
                        11:24 we're open
                    </div>
                    <Link 
                        to='/reservation' 
                        className="block w-full py-3 px-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={handleLinkClick}
                    >
                        Table Reservation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




// import { Link } from "react-router";
// import Logo from "../../assets/image/Hero/logo.svg"
// import Menu from "../../assets/icon/menu.svg"
// import "./nav.css"
// import { useState } from "react";


// const Navbar = () => {
//     const [isMenu,setIsMenu] = useState(false)
//     return (
//         <nav className="max-w-[1170px] flex-row-center justify-between m-auto font-normal mt-[30px] mb-5 relative px-[14px] sm:px-[30px] ">
//             <div className="hidden-nav-show gap-[27px] ">
//                 <Link to='/'>Home</Link>
//                 <Link to='/'>Menu</Link>
//                 <Link to='/'>About us</Link>
//                 <Link to='/'>Blog</Link>
//                 <Link to='/'>Contact</Link>
//             </div>
//             <button onClick={()=>setIsMenu(!isMenu)}>
//                 <img src={Menu} alt="menu" className="w-6 h-6 text-white lg:hidden menu-svg-icon " />
//             </button>
//             <div>
//                 <img src={Logo} alt="logo" className="w-[53px] h-[55px] " />
//             </div>
//             <div className="flex-row-center gap-5">
//                 <p className="hidden sm:flex">
//                     11:24 we're open
//                 </p>
//                 <Link to='/' className="Table-Reservation text-sm sm:text-[16px] ">
//                     Table Reservation
//                 </Link>
//             </div>
//             {isMenu && (
//                 <div className="h-screen w-[200px] bg-[#0a0a0ad7] left-0 absolute ">
//                     <div>
//                         <button onClick={()=>setIsMenu(!isMenu)}>X</button>
//                     </div>
//                     <div>
//                         <Link to='/'>Home</Link>
//                 <Link to='/'>Menu</Link>
//                 <Link to='/'>About us</Link>
//                 <Link to='/'>Blog</Link>
//                 <Link to='/'>Contact</Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
