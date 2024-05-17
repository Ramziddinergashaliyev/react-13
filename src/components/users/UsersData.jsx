import React from "react";
import "./userData.scss";
import axios from "../../api";

function UsersData({ data, isBtns, setReload }) {
  const hundleDelete = (id) => {
    axios
      .delete(`/users/${id}`)
      .then((res) => {
        setReload(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
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
          <button className="users__btn-edit">Edit</button>
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
    </section>
  );
}

export default UsersData;
