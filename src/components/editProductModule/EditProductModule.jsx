import React from "react";
import "./editProductModule.scss";
import axios from "../../api";

function EditProductModule({ setData, data, setReload }) {
  const hundleSave = (e) => {
    e.preventDefault();
    let newProduct = {
      img: data.img,
      name: data.name,
      price: data.price,
      desc: data.desc,
    };
    console.log(newProduct);

    axios
      .put(`/products/${data.id}`, newProduct)
      .then((res) => {
        setData(null);
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div onClick={() => setData(null)} className="product__overlay"></div>;
      <form
        onSubmit={hundleSave}
        className="form product__edit__form"
        action=""
      >
        <input
          required
          value={data.img}
          onChange={(e) =>
            setData((prev) => ({ ...prev, img: e.target.value }))
          }
          placeholder="url"
          type="url"
        />
        <input
          required
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="name"
          type="text"
        />
        <input
          required
          value={data.price}
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          placeholder="price"
          type="number"
        />
        <input
          required
          value={data.desc}
          onChange={(e) =>
            setData((prev) => ({ ...prev, desc: e.target.value }))
          }
          placeholder="desc"
          type="text"
        />
        <div className="product__edit__btn">
          <button>Save</button>
          <button onClick={() => setData(null)}>Close</button>
        </div>
      </form>
    </>
  );
}

export default EditProductModule;
