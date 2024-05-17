import { toast } from "react-toastify";
import axios from "../../../api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let initionalState = {
  img: "",
  firstname: "",
  lastname: "",
  phoneNumber: "",
  address: "",
};

function CreateUsers() {
  const [user, setUser] = useState(initionalState);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const hundleCreate = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`/users`, user)
      .then((res) => {
        toast.success("Malumot Qoshildi");
        setUser(initionalState);
        navigate("/admin/manageUsers");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="form" action="">
        <h1>Users</h1>
        <input
          value={user.img}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, img: e.target.value }))
          }
          placeholder="img"
          type="url"
        />
        <input
          value={user.firstname}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, firstname: e.target.value }))
          }
          placeholder="firstname"
          type="text"
        />
        <input
          value={user.lastname}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, lastname: e.target.value }))
          }
          placeholder="lastname"
          type="text"
        />
        <input
          value={user.phoneNumber}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, phoneNumber: +e.target.value }))
          }
          placeholder="phoneNumber"
          type="number"
        />
        <input
          value={user.address}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, address: e.target.value }))
          }
          placeholder="address"
          type="text"
        />
        <button disabled={loading} onClick={hundleCreate}>
          {loading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default CreateUsers;
