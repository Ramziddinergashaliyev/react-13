import React, { useState } from "react";
import "./userData.scss";
import axios from "../../api";
import EditUsersModule from "../editUsersModule/EditUsersModule";

function UsersData({ data, isBtns, setReload }) {
  const [usersEdit, setUsersEdit] = useState(null);
  const hundleDelete = (id) => {
    axios
      .delete(`/users/${id}`)
      .then((res) => {
        setReload((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const hundleEdit = (product) => {
    setUsersEdit(product);
  };

  let usersData = data?.map((el) => (
    <div key={el.id} className="users__card">
      <div className="users__card__imgs">
        <img src={el.img} alt="" />
      </div>
      <div className="users__card__info">
        <h3 className="users__card__title">
          {el.firstname} {el.lastname}
        </h3>
        <p className="users__card__desc">phoneNumber :{el.phoneNumber}</p>
        <p className="users__card__desc">address :{el.address}</p>
      </div>
      {isBtns ? (
        <div className="users__btns">
          <button onClick={() => hundleEdit(el)} className="users__btn-edit">
            Edit
          </button>
          <button
            onClick={() => hundleDelete(el.id)}
            className="users__btn-delete"
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
    <section className="users container">
      <div className="users__cards">{usersData}</div>;
      {usersEdit ? (
        <EditUsersModule
          setData={setUsersEdit}
          data={usersEdit}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </section>
  );
}

export default UsersData;
