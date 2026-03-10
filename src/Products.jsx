import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const title = searchParams.get("title");
  const [query, setQuery] = useState(q || "");
  const [debounce, setDebounce] = useState(q || "");
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function getproducts() {
      const { data } = await axios.get(
        "https://dummyjson.com/products/search?q=" + debounce,
      );
      setproducts(data.products);
    }
    setSearchParams((prevParams) => {
      prevParams.set("q", debounce);
      return prevParams;
    });
    getproducts();
  }, [debounce]);

  useEffect(() => {
    var timer = setTimeout(() => {
      setDebounce(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
        {title}
      <input
        type="text"
        name=""
        id=""
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.title} : {product.price}{" "}
            <button
              onClick={() => {
                navigate("/products/" + product.id);
              }}
            >
              see details
            </button>
          </li>
        );
      })}
    </div>
  );
}
export default Products;
