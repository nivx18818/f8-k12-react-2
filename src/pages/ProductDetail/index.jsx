import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://api01.f8team.dev/api/products/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.slug]);

  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
    </>
  );
}

export default ProductDetail;
