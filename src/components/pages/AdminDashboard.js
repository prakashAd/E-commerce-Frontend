import React from "react";
import Adminsidebar from "../layouts/Adminsidebar";
import Navbar from "../layouts/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Adminsidebar/>
          </div>

          <div className="col-md-9 ">
            <h2>Welcome to Admin dashboard</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
