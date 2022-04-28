import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  const { id, color } = router.query;
  console.log(router.query);
  return (
    <div>
      Pagina del producto {id} {color}
    </div>
  );
};

export default ProductItem;
