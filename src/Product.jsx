import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProductDetails() {
      const { data } = await axios.get("https://dummyjson.com/products/" + id);
      setProduct(data);
    }
    getProductDetails();
  }, []);

  return (
    <div>
      <h1>this is product details for this product {id}</h1>
      <h1>{product.title}</h1>
    </div>
  );
}

export default ProductDetails;
