import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Sidebare() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  async function getConnectedUser() {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("connected user", data);
      setUser(data);
    } catch (err) {
      navigate("/login");
    }
  }
  useEffect(() => {
    getConnectedUser();
  }, []);

  return (
    <div>
      <h1>Welcom, {user.firstName}</h1>
    </div>
  );
}

export default Sidebare;
