import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../../api/userApi";
import profile from '../../profile image/FB_IMG_1588428810530.jpg'

function Adminsidebar({ category, product, orders, users }) {
  const { user } = isAuthenticated();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout().then(() => {
      localStorage.removeItem("jwt");
      navigate("/");
    });
  };

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 ">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Admin Dashboard</span>
        </Link>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            {category ? (
              <Link to="/admin/category" className="nav-link text-white active">
                <i className="bi bi-grid mx-2"></i>Category
              </Link>
            ) : (
              <Link to="/admin/category" className="nav-link text-dark ">
                <i className="bi bi-grid mx-2"></i>Category
              </Link>
            )}
          </li>

          <li>
            {product ? (
              <Link to="/admin/products" className="nav-link text-white active">
                <i className="bi bi-table mx-2"></i>Products
              </Link>
            ) : (
              <Link to="/admin/products" className="nav-link text-dark ">
                <i className="bi bi-table mx-2"></i>Products
              </Link>
            )}
          </li>

          <li>
            {orders ? (
              <Link to="#" className="nav-link text-white active">
                <i className="bi bi-grid mx-2"></i>Orders
              </Link>
            ) : (
              <Link to="#" className="nav-link text-dark ">
                <i className="bi bi-grid mx-2"></i>Orders
              </Link>
            )}
          </li>

          <li>
            {users ? (
              <Link to="/admin/users" className="nav-link text-white active">
                <i className="bi bi-person-circle mx-2"></i>Users
              </Link>
            ) : (
              <Link to="/admin/users" className="nav-link text-dark">
                <i className="bi bi-person-circle mx-2"></i>Users
              </Link>
            )}
          </li>
        </ul>

        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={profile}
              alt="profile image"
              width="32"
              height="32"
              className="rounded-circle me-2 mx-2 my-2"
            />
            <strong>{user.username}</strong>
          </Link>

          <ul className="dropdown-menu text-small shadow">
            {/* <li><Link className="dropdown-item" to="#">New project</Link></li> */}
            {/* <li><Link className="dropdown-item" to="#">Settings</Link></li> */}
            <li>
              <Link className="dropdown-item" to="#">
                {user.email}
              </Link>
            </li>
            <li>
              <span className="dropdown-item" onClick={handleSignout}>
                Sign out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Adminsidebar;
