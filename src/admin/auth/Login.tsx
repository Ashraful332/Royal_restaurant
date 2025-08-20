import "../admin.css"

export default function Auth() {

    const handelAdminAuth = ()=>{
        console.log("hello word");
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
                {/* Left Section */}
                <div className="w-full lg:w-[50vw] h-[300px] lg:h-screen auth-photo p-6 flex flex-col justify-center lg:justify-start">
                    <h2 className="text-white text-3xl font-bold mb-4">Login as Admin</h2>
                    <p className="text-white text-sm sm:text-base w-full sm:w-[70%] leading-relaxed">
                        Enter admin name and password to login as admin. If you are an imposter or hacker, I say fuck you.
                    </p>
                </div>

                {/* Mobile Profile Image */}
                <div className="w-28 h-28 overflow-hidden bg-black rounded-full lg:hidden flex items-center justify-center absolute top-[240px] ">
                    <img src="https://i.ibb.co.com/7xR5TqRx/vesonema-l-Q2m-TKVRt-N4-unsplash.jpg" alt="my photo" className="object-cover w-24" />
                </div>

                {/* Right Section */}
                <div className="bg-[#fdf4f4] h-screen w-full lg:w-[50vw] flex items-center justify-center">
                    <form 
                        onSubmit={handelAdminAuth} 
                        className="p-8 w-[90%] max-w-md text-gray-800"
                    >
                        <h2 className="text-2xl font-bold mb-2">Login As Admin</h2>
                        <p className="text-sm text-gray-600 mb-6">Enter admin name and a strong password</p>

                        {/* Admin Name */}
                        <label className="block text-sm font-medium mb-2">Admin Name</label>
                        <input 
                            type="text" 
                            name="adminName" 
                            placeholder="Enter admin name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 mb-4"
                        />

                        {/* Admin Password */}
                        <label className="block text-sm font-medium mb-2">Admin Password</label>
                        <input 
                            type="text" 
                            name="adminPassword" 
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 mb-6"
                        />

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-xl hover:bg-pink-600 transition-all duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
