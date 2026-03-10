import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Posts() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [loader, setLoader] = useState(false);

  async function getPosts() {
    try {
      setError("");
      setLoader(true);
      var res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setList(res.data);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoader(false);
    }
  }

  async function createPost() {
    try {
      setError("");
      setLoader(true);
      var res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        ...post,
        userId: 1,
      });
      setPost({
        title: "",
        body: "",
      });
      setList([res.data, ...list]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="title"
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <br />
      <textarea
        type="text"
        name=""
        id=""
        placeholder="body"
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
      />
      <br />
      <button onClick={createPost}>create fake post</button>
      <h1>this is posts component </h1>
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      {loader && <h1>Loading ... </h1>}
      {list.map((e) => {
        return (
          <div>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
