import { useParams } from "react-router-dom";
import { useGetOneProductQuery } from "@/services/product";

function ProductDetail() {
  const params = useParams();
  const product = useGetOneProductQuery(params.slug);

  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
    </>
  );
}

export default ProductDetail;
