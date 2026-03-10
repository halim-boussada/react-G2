import { Link } from "react-router-dom"

function Home()
{
    return <div>
        <h1>This is Hommeee page</h1>
        <Link to="/login" >Start your experiance</Link>
    </div>
}


export default Home