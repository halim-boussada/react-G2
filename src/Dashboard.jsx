import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebare from "./Sidebare"

function Dashboard(){
    return <div>
        <Navbar />
        <div style={{display : "grid" , gridTemplateColumns : "300px 1fr" , gap : "30px"}} >
          <div style={{ background : "blue"}}>
             <Sidebare />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        
    </div>
}


export default Dashboard