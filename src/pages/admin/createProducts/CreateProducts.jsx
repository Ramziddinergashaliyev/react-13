import { toast } from "react-toastify";
import axios from "../../../api";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// let initionalState = {
//   img: "",
//   name: "",
//   price: "",
//   desc: "",
// };

function CreateProducts() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate;

  const img = useRef();
  const name = useRef();
  const price = useRef();
  const desc = useRef();

  const hundleCreate = (e) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      img: img.current.value,
      name: name.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };

    axios
      .post(`/products`, productData)
      .then((res) => {
        toast.success("Malumot Qo'shildi");
        img.current.value = "";
        name.current.value = "";
        price.current.value = "";
        desc.current.value = "";
        navigate("/admin/ManageProducts");
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div>
        <form onSubmit={hundleCreate} className="form" action="">
          <h1>Products</h1>
          <input required ref={img} placeholder="img" type="url" />
          <input required ref={name} placeholder="name" type="text" />
          <input required ref={price} placeholder="price" type="number" />
          <input required ref={desc} placeholder="desc" type="text" />
          <button disabled={loading}>{loading ? "loading.." : "create"}</button>
        </form>
      </div>
    </>
  );
}

export default CreateProducts;
