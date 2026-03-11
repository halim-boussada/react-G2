import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "./Hooks/debounce";

function SearchPosts(){
    const [query , setQuery] = useState("")
    const [posts , setPosts] = useState([])
    const debounce = useDebounce(query , 1000)

    

    useEffect(()=>{
        async function getPosts() {
            const {data} = await axios.get("https://dummyjson.com/posts/search?q=" + debounce)
            setPosts(data.posts)
        }
        getPosts()
    } , [debounce])

  

    return <div>
        <input type="text" name="" id="" onChange={(e)=>{ setQuery(e.target.value)}}/>
        {posts.map((post)=>{
            return <li key={post.id} >{post.title}</li>
        })}
    </div>
}
export default SearchPosts