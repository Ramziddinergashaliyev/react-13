import { toast } from "react-toastify";
import axios from "../../../api";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUsers() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const img = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const phoneNumber = useRef();
  const address = useRef();

  const hundleCreate = (e) => {
    e.preventDefault();
    setLoading(true);

    const usersData = {
      img: img.current.value,
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      phoneNumber: phoneNumber.current.value,
      address: address.current.value,
    };

    axios
      .post(`/users`, usersData)
      .then((res) => {
        toast.success("Malumot Qoshildi");
        img.current.value = "";
        firstname.current.value = "";
        lastname.current.value = "";
        phoneNumber.current.value = "";
        address.current.value = "";
        navigate("/admin/manageUsers");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={hundleCreate} className="form" action="">
        <h1>Users</h1>
        <input required ref={img} placeholder="img" type="url" />
        <input required ref={firstname} placeholder="firstname" type="text" />
        <input required ref={lastname} placeholder="lastname" type="text" />
        <input
          required
          ref={phoneNumber}
          placeholder="phoneNumber"
          type="number"
        />
        <input required ref={address} placeholder="address" type="text" />
        <button disabled={loading}>{loading ? "Loading..." : "Create"}</button>
      </form>
    </div>
  );
}

export default CreateUsers;
