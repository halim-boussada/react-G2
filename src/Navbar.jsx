import { Link } from "react-router-dom"
function Navbar(){
    return <div style={{display : "flex" , gap : "20px" , background : "lightblue" , padding : "10px"}}>
        <Link to={"/dashboard/users"}>users</Link>
        <Link to={"/dashboard/posts"}>posts</Link>
    </div>
}
export default Navbar