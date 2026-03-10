import axios from "axios";
import { useEffect, useState } from "react";

function SearchPosts(){
    const [query , setQuery] = useState("")
    const [debounce , setDebounce] = useState("")
    const [posts , setPosts] = useState([])
    useEffect(()=>{
        async function getPosts() {
            const {data} = await axios.get("https://dummyjson.com/posts/search?q=" + debounce)
            setPosts(data.posts)
        }
        getPosts()
    } , [debounce])

    useEffect(()=>{
      var timer = setTimeout(()=>{
        setDebounce(query)
      } , 500)
      return ()=> clearTimeout(timer)
    } , [query])

    return <div>
        <input type="text" name="" id="" onChange={(e)=>{ setQuery(e.target.value)}}/>
        {posts.map((post)=>{
            return <li key={post.id} >{post.title}</li>
        })}
    </div>
}
export default SearchPosts