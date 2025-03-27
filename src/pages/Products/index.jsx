import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import productService from "@/services/productService";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productService.getAll();
      setProducts(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Products page</h1>
      <ul>
        {products.map(({ id, slug, title }) => (
          <li key={id}>
            <Link to={`/products/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
