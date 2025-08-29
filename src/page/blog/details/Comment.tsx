import axios from "axios";
import React, { useState } from "react";
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
    const publicApi = import.meta.env.VITE_API_URL;


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
    const handelcommentBlog = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget

        // comment data
        const Comment = (form.elements.namedItem("comment") as HTMLInputElement)?.value;
        const Name = (form.elements.namedItem("Name") as HTMLInputElement)?.value;
        const Email = (form.elements.namedItem("Email") as HTMLInputElement)?.value;

        // set comment on object
        const comment_data = {
            Comment, Name, Email,
            id: _id,
            photo
        }
        console.log("The comment data :", comment_data);

        try {
            const response = await axios.patch(`${publicApi}`, { comment_data })
            const data = response.data

            if (data.ok) {
                toast.success("comment is add sussesfully!");


            } else {
                toast.error(data.message || "Failed to add comment.");
            }

        } catch (error) {
            console.error("Error adding comment:", error);
            toast.error("Something went wrong.");
        }

        // reset the form data
        form.reset();
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
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-white/90 rounded-2xl shadow-2xl p-6 w-[90%] sm:w-[500px] relative text-gray-900">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white shadow-2xs border-[#0000001c] border-[0.4px] transition-colors"
                        >
                            ✕
                        </button>

                        <h2 className="text-lg font-semibold mb-4">
                            Comment:{" "}
                            <span className="text-sm text-gray-600 italic">{comment}</span>
                        </h2>

                        <form
                            onSubmit={handelcommentBlog}
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="text"
                                name="comment"
                                placeholder="Write your comment..."
                                className="border border-gray-300 rounded-xl py-2 px-3 focus:ring-2 focus:ring-primary/70 focus:outline-none"
                                value={comment}
                                required
                                onChange={(e) => setComment(e.target.value)}
                            />

                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                required
                                className="border border-gray-300 rounded-xl py-2 px-3 focus:ring-2 focus:ring-primary/70 focus:outline-none"
                            />

                            <input
                                type="email"
                                name="Email"
                                placeholder="Your Email"
                                required
                                className="border border-gray-300 rounded-xl py-2 px-3 focus:ring-2 focus:ring-primary/70 focus:outline-none"
                            />

                            <div>
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
                                    className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-amber-400 file:text-white hover:file:bg-amber-600 transform-fill duration-300"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-primary text-white py-2 px-4 rounded-xl font-medium shadow hover:bg-primary/90 transition"
                            >
                                Submit Comment
                            </button>
                        </form>
                    </div>
                </div>

            )}
        </div>
    )
}