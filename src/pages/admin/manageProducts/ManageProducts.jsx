import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../../../components/products/Products";

function ManageProducts() {
  const [reload, setReload] = useState(true);
  let { data, loading, error } = useFetch("/products", reload);
  return (
    <div>
      <Products setReload={setReload} isBtns={true} data={data} />
    </div>
  );
}

export default ManageProducts;
