import React from "react";
import "./products.scss";
import axios from "../../api";

const Products = ({ data, isBtns, setReload }) => {
  const hundleDelete = (id) => {
    axios
      .delete(`/products/${id}`)
      .then((res) => {
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  let productsData = data?.map((el) => (
    <div className="products__card">
      <div className="products__imgs">
        <img src={el.img} alt="" />
      </div>
      <div className="products__info">
        <h2 className="products__title">name: {el.name}</h2>
        <p className="products__desc">price: {el.price}</p>
        <p className="products__desc">desc: {el.desc}</p>
      </div>
      {isBtns ? (
        <div className="products__btns">
          <button className="products__btn-edit">Edit</button>
          <button
            onClick={() => hundleDelete(el.id)}
            className="products__btn-delete"
          >
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <section className="products container">
      <div className="products__cards">{productsData}</div>;
    </section>
  );
};

export default Products;
