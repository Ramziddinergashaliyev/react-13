import React from "react";
import useFetch from "../../hooks/useFetch";
import Products from "../../components/products/Products";
import Header from "../../components/header/Header";

function Home() {
  let { data, loading, error } = useFetch("/products");
  return (
    <div>
      <Header />
      <Products data={data} />
    </div>
  );
}

export default Home;
