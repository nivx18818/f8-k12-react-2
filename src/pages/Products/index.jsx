import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/features/products/productsSlice";
import { Link } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
