import { useState } from "react";

type Id = {
    _id: string
}

export default function CommentBlog({ _id }: Id) {
    const [comment, setComment] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    console.log(_id);

    // make the form stable
    const handelLogCom = (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        console.log(comment);
    }

    return (
        <div>
            <form onSubmit={handelLogCom} className="flex items-center gap-5 ">
                <input type="text" name="coment" id="" 
                className="border rounded-2xl py-1 px-2"
                onChange={(e) => setComment(e.target.value)} />

                <button
                    onClick={() => setIsOpen(true)}
                    type="submit"
                    className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl font-semibold hover:from-green-500 hover:to-blue-600 transition-all">
                        comment
                </button>
            </form>
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
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-1 right-1 text-xl w-10 h-10  rounded-full bg-white "
                        >
                            ✕
                        </button>

                        <p className="font-semibold text-black">commant: <span className="text-sm text-[#000000d8] italic "> {comment}</span></p>
                        <form className="flex flex-col gap-3">

                            <input type="text" name="Name" 
                            placeholder="Name"
                            required
                            className="border " />

                            <input type="email" name="Email" 
                            placeholder="Email"
                            required
                            className="border" />

                            <button className="bg-primary py-2 px-4 rounded-2xl font-medium">commant</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}