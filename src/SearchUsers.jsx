import axios from "axios";
import { useEffect, useState } from "react";
import "./SearchUsers.css";
import { useDebounce } from "./Hooks/debounce";

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const debouncequery = useDebounce(query , 500)

  useEffect(() => {
      async function getUsers() {
      const { data } = await axios.get(
        "https://dummyjson.com/users/search?q=" + debouncequery,
      );
      setUsers(data.users);
    }
      getUsers();
  }, [debouncequery]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {users.map((user) => {
        return (
          <div className="userItem">
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <h4>{user.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default SearchUsers;
