import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import productService from "@/services/productService";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await productService.getOne(params.slug);
      setProduct(data);
    }
    fetchData();
  }, [params.slug]);

  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
    </>
  );
}

export default ProductDetail;
