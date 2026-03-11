import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTrim } from "./Hooks/trim";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [erros , setErrors] = useState([])
   

  async function login() {
    if(!validate()){
      return;
    }
    try {
         const { data } = await axios.post("https://dummyjson.com/auth/login" , {
        username : username ,
        password : useTrim(password)
    })
    localStorage.setItem("token" , data.accessToken)
    navigate("/dashboard/users")
    } catch(err){
        setErrors([...erros , err.message])
    }
    
  }

  function validate(){
   const errorsCopy = []
    if(!username){
        errorsCopy.push("username could not be empty")
    }
    if(password.length < 8){
        errorsCopy.push("password should be more than 8 characters")
    }
    setErrors(errorsCopy)
    return errorsCopy.length ? false : true
  }

  return (
    <div>
      <h1>This is Login page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
      <ul>
        {erros.map((e)=>{
            return <li style={{color : "red"}}>{e}</li>
        })}
      </ul>
    </div>
  );
}

export default Login;
