import { toast } from "react-toastify";
import axios from "../../../api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let initionalState = {
  img: "",
  name: "",
  price: "",
  desc: "",
};

function CreateProducts() {
  const [product, setProduct] = useState(initionalState);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate;

  const hundleCreate = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`/products`, product)
      .then((res) => {
        toast.success("Malumot Qo'shildi");
        setProduct(initionalState);
        navigate("/admin/ManageProducts");
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div>
        <form className="form" action="">
          <h1>Products</h1>
          <input
            value={product.img}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, img: e.target.value }))
            }
            placeholder="img"
            type="url"
          />
          <input
            value={product.name}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="name"
            type="text"
          />
          <input
            value={product.price}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, price: e.target.value }))
            }
            placeholder="price"
            type="number"
          />
          <input
            value={product.desc}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, desc: e.target.value }))
            }
            placeholder="desc"
            type="text"
          />
          <button disabled={loading} onClick={hundleCreate}>
            {loading ? "loading.." : "create"}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateProducts;
