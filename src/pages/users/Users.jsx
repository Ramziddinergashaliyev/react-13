import React from "react";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import UsersData from "../../components/users/UsersData";

function Users() {
  let { data, loading, error } = useFetch("/users");
  return (
    <div>
      <Header />
      <UsersData data={data} />
    </div>
  );
}

export default Users;
