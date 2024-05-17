import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import UsersData from "../../../components/users/UsersData";

function ManageUsers() {
  const [reload, setReload] = useState(true);
  let { data, loading, error } = useFetch("/users", reload);
  return (
    <div>
      <UsersData setReload={setReload} isBtns={true} data={data} />
    </div>
  );
}

export default ManageUsers;
