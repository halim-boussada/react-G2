import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SearchUsers from "./SearchUsers";
import SearchPosts from "./SearchPosts";
import Dashboard from "./Dashboard";
import Products from "./Products";
import ProductDetails from "./Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="users" element={<SearchUsers />} />
          <Route path="posts" element={<SearchPosts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
