import React from "react";
import "./editUsersModule.scss";
import axios from "../../api";

function EditUsersModule({ setData, data, setReload }) {
  const hundleSave = (e) => {
    e.preventDefault();
    let newProduct = {
      img: data.img,
      firstname: data.firstname,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber,
      address: data.address,
    };
    console.log(newProduct);

    axios
      .put(`/users/${data.id}`, newProduct)
      .then((res) => {
        setData(null);
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div onClick={() => setData(null)} className="users__overlay"></div>;
      <form onSubmit={hundleSave} className="form users__edit__form" action="">
        <input
          value={data.img}
          onChange={(e) =>
            setData((prev) => ({ ...prev, img: e.target.value }))
          }
          placeholder="url"
          type="url"
        />
        <input
          required
          value={data.firstname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, firstname: e.target.value }))
          }
          placeholder="name"
          type="text"
        />
        <input
          required
          value={data.lastname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, lastname: e.target.value }))
          }
          placeholder="price"
          type="text"
        />
        <input
          required
          value={data.phoneNumber}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          placeholder="desc"
          type="number"
        />
        <input
          required
          value={data.address}
          onChange={(e) =>
            setData((prev) => ({ ...prev, address: e.target.value }))
          }
          placeholder="desc"
          type="text"
        />
        <div className="users__edit__btn">
          <button>Save</button>
          <button onClick={() => setData(null)}>Close</button>
        </div>
      </form>
    </>
  );
}

export default EditUsersModule;
