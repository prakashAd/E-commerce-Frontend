import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../api/productapi";
import Adminsidebar from "../layouts/Adminsidebar";
import Navbar from "../layouts/Navbar";
import { API } from "../../config";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { isAuthenticated } from "../../api/userApi";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const { token } = isAuthenticated();

  useEffect(() => {
    getAllProducts().then((data) => {
      if (data.err) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  }, [success]);

  const handleDelete = (id) => (e) => {
    e.preventDefault();
    setSuccess(false);
    swal("DeleteProduct", "Are you sure want to delete desired product?", {
      buttons: {
        Cancel: "Cancel",
        Delete: "Delete",
      },
      icon: "warning",
    })
    .then((value) => {
      switch (value) {
        case "Cancel":
          swal("Cancel", "You Cancelled the operation Sucessfully", "Warning");
          break;

        case "Delete":
          deleteProduct(id, token)
            .then((data) => {
              if (data.error) {
                swal("Error!", data.error, "error");
              } else {
                setSuccess(true);
                swal("Success!", data.msg, "success");
              }
            })
            // .catch(swal("error occured!"));
          break;
        default:
          swal("Something went wrong!");
      }
    });
  }
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Adminsidebar product />
            </div>

            <div className="col-md-9 ">
              <h2>Products</h2>
              <table className="table text-center table-hover table-bordered">
                <thead className="table-dark">
                  <tr>
                    <td>S.No</td>
                    <td>Product Image</td>
                    <td>Product Name</td>
                    <td>Quantity</td>
                    <td>Unit Price</td>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product, i) => {
                      return (
                        <tr key={product._id}>
                          <td>{i + 1}</td>
                          <td>
                            <img
                              src={`${API}/${product.product_image}`}
                              alt={product.product_image}
                              style={{ height: "100px" }}
                            />
                          </td>
                          <td>{product.product_name}</td>
                          <td>{product.product_in_stock}</td>
                          <td>{product.product_price}</td>

                          <td>
                            <div className="btn-group">
                              <Link
                                to={`/admin/product/update/${product._id}`}
                              >
                                <button className="btn btn-warning">
                                  Update
                                </button>
                              </Link>
                              <button
                                className="btn btn-danger "
                                onClick={handleDelete(product._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <Link to="/admin/product/add">Add new product</Link>

            </div>
          </div>
        </div>
      </>
    );
  };


export default AdminProducts;
