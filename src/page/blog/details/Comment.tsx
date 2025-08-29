import { useState } from "react";
import toast from "react-hot-toast";

type Id = {
    _id: string
}

export default function CommentBlog({ _id }: Id) {
    const [photo, setPhoto] = useState("");
    const [comment, setComment] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    console.log(_id);
    const apiKey = import.meta.env.VITE_IMAGEBB_API;

    // make the form stable
    const handelLogCom = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(comment);
    }

    // mange file submit
    const handleFileSelect = async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: "POST",
                    body: formData
                }
            );
            const data = await response.json();
            if (data.success) {
                const imageUrl = data.data.url;
                setPhoto(imageUrl);
                toast.success("Image uploaded successfully!");
            } else {
                toast.error("Failed to upload image");
            }
        } catch (error) {
            console.error("Image upload error:", error);
            toast.error("Image upload error");
        }
    };

    // handel commant blog

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
                        <form
                            // onSubmit={ }
                            className="flex flex-col gap-3">

                            <input type="text" name="coment" id=""
                                className="border rounded-2xl py-1 px-2"
                                value={comment}
                                required
                                onChange={(e) => setComment(e.target.value)} />

                            <input type="text" name="Name"
                                placeholder="Name"
                                required
                                className="border " />

                            <input type="email" name="Email"
                                placeholder="Email"
                                required
                                className="border" />

                            <label className="block text-sm font-medium mb-1">Photo</label>
                            <input
                                id="picture"
                                type="file"
                                accept="image/*"
                                required
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        handleFileSelect(file);
                                    }
                                }}
                                className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 mb-4"
                            />

                            <button
                                type="submit"
                                className="bg-primary py-2 px-4 rounded-2xl font-medium">commant</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}