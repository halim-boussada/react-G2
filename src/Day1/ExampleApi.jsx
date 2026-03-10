import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function ExampleApi() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("https://dummyjson.com/users");
      setusers(data.users);
    }
    getData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Card
              image={user.image}
              title={user.firstName + " " + user.lastName}
              description={user.address.address + " " + user.address.postalCode}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ExampleApi;
