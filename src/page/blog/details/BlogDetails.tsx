import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type BlogData = {
    _id: string,
    title: string,
    SortDes: string,
    photoUrl: string,
    description: string,
    View: string

}


export default function BlogDetails() {
    const [blogs, setBlogs] = useState<BlogData | any >(" ")
    const { id } = useParams(); // fecht the id of blog

    // fetch the data
    useEffect(() => {
        async function LoadData() {
            try {
                const response = await axios.post(`${AdminUrl}/blog-details`, { id })
                // const response = await axios.get(`${AdminUrl}/blog-details/${id}`)

                setBlogs(response.data)
                console.log(response.data);
            } catch (error) {
                console.error("the error is coming on load blog", error)
            }
        }
        LoadData()
    }, [id])

    return (
        <div>
            <div >
                <img src={blogs.photoUrl} alt="Blog image" />
                <p>{blogs.title}</p>
                <p>{blogs.SortDes}</p>
                <p>{blogs.description}</p>
                <p>{blogs.View}</p>
            </div>
        </div>
    )
}