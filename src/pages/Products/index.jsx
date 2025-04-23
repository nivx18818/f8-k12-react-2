import { useGetAllProductsQuery } from "@/services/product";
import { Link } from "react-router-dom";

function Products() {
  const { data, isSuccess } = useGetAllProductsQuery();

  return (
    <>
      <h1>Products page</h1>
      <ul>
        {isSuccess &&
          data.data.items.map(({ id, slug, title }) => (
            <li key={id}>
              <Link to={`/products/${slug}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Products;
