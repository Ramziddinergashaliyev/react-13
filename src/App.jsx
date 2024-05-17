import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import ManageProducts from "./pages/admin/manageProducts/ManageProducts";
import CreateProducts from "./pages/admin/createProducts/CreateProducts";
import ManageUsers from "./pages/admin/manageUsers/ManageUsers";
import CreateUsers from "./pages/admin/createUsers/CreateUsers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="createProducts" element={<CreateProducts />} />
            <Route path="manageUsers" element={<ManageUsers />} />
            <Route path="createUsers" element={<CreateUsers />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
