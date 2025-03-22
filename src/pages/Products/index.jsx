import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api01.f8team.dev/api/products")
      .then((res) => res.json())
      .then((productData) => setProducts(productData.data));
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
