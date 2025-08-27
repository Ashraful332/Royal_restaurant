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
    const [blogs,setBlogs] = useState<BlogData[]>([])
    const { id } = useParams(); // fecht the id of blog
    
    // fetch the data
    useEffect(()=>{
        async function LoadData() {
           const response = await axios.get(`${AdminUrl}`,{id}) 
           setBlogs(response.data)
        }
        LoadData()
    },[])

    return(
        <div>
            {blogs.map((blog)=>(
                <div key={blog._id}>
                    <img src={blog.photoUrl} alt="Blog image" />
                    <p>{blog.title}</p>
                    <p>{blog.SortDes}</p>
                    <p>{blog.description}</p>
                    <p>{blog.View}</p>
                </div>
            ))}
        </div>
    )
}