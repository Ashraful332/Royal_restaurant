import { useState } from "react";

type Id = {
    _id: string
}

export default function CommentBlog({ _id }: Id) {
    const [isOpen, setIsOpen] = useState(false)
    console.log(_id);

    return (
        <div>
            <div className="flex items-center gap-5 ">
                <input type="text" name="coment" id="" className="border rounded-2xl py-1 px-2" />
                <button 
                onClick={() => setIsOpen(true)}
                className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl font-semibold hover:from-green-500 hover:to-blue-600 transition-all">comment</button>
            </div>
            <div className="flex gap-3 mt-10">
                <div>
                    <img src="https://i.ibb.co.com/GvWGMT4T/Screenshot-20250712-211018.png" alt="user photo" className="rounded-full w-12 h-12 " />
                </div>
                <div className="p-6 bg-[#0c0c0c7a] rounded-2xl ">
                    <div className=" flex justify-between text-center ">
                        <p className="text-xs font-semibold text-[#ffffffd2] ">name</p>
                        <p className="text-xs font-semibold text-[#ffffff70] ">date and time</p>
                    </div>
                    <div>
                        <p>commante text , my comment , user commant</p>
                    </div>
                </div>
            </div>

            {/* modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#08080898]  bg-opacity-60 flex items-center justify-center z-50 ">
                    <div className="bg-[#d7d4d4f2] rounded-2xl shadow-2xl p-6 w-[90%] sm:w-[500px] relative text-black ">
                        <p>text</p>
                    </div>
                </div>
            )}
        </div>
    )
}