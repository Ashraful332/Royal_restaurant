/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import toast from "react-hot-toast";

type BlogData = {
    comments: any;
    _id: string,
    title: string,
    SortDes: string,
    photoUrl: string,
    description: string,
    View: string

}


type CommentBlogProps = {
    MyBlogData: BlogData
}

export default function CommentBlog({ MyBlogData }: CommentBlogProps) {
    const [photo, setPhoto] = useState("");
    const [blogData, setBlogData] = useState(MyBlogData || { comments: [] });
    const [comment, setComment] = useState('');
    const [isOpen, setIsOpen] = useState(false)

    console.log(blogData, "and the blog data is : ", MyBlogData);


    const _id = MyBlogData._id
    console.log("Object Id", _id);
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
        const comment = (form.elements.namedItem("comment") as HTMLInputElement)?.value;
        const name = (form.elements.namedItem("Name") as HTMLInputElement)?.value;
        const email = (form.elements.namedItem("Email") as HTMLInputElement)?.value;

        // set comment on object
        const comment_data = {
            comment, name, email,
            id: _id,
            photo
        }
        console.log("The comment data :", comment_data);

        try {
            const response = await fetch(`${publicApi}/comment`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(comment_data),
            });
            const data = await response.json();
            // const data = response.data

            if (response.ok) {
                toast.success("Comment added successfully!", data);

                const bdTime = new Date().toLocaleString("en-US", {
                    timeZone: "Asia/Dhaka",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true   // AM/PM সহ দেখাবে
                });

                // Update local state immediately
                setBlogData((prev: any) => ({
                    ...prev,
                    comments: [...(prev.comments || []), { ...comment_data, date: bdTime }],
                }));

            } else {
                toast.error(data.message || "Failed to add comment.");
            }

        } catch (error) {
            console.error("Error adding comment:", error);
            toast.error("Something went wrong.");
        }

        // reset the form data
        form.reset();
        setComment("")
    }


    return (
        <div>
            <form onSubmit={handelLogCom} className="flex flex-col sm:flex-row items-center justify-center gap-5 ">
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
            {blogData.comments?.map((cmt: any, index: number) => (
                <div key={index} className="w-[97vw] sm:w-[80vw] lg:w-[700px] ">
                    <div className="flex gap-3 mt-10">
                        <div className="w-14 ">
                            <img
                                src={cmt?.photo}
                                alt="user photo"
                                className="rounded-full w-12 h-12 object-cover "
                            />
                        </div>
                        <div className="p-6 bg-[#0c0c0c7a] rounded-2xl w-full">
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-sm font-semibold text-[#ffffffd8] ">{cmt?.name}</p>
                                <p className="text-xs font-bold text-gray-400">{cmt?.date}</p>
                            </div>
                            <div>
                                <p className="text-[#ffffff98] italic ">{cmt?.comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

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