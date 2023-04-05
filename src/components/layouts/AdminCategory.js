import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteCategory, getAllCategories } from "../../api/categoryapi";
import { isAuthenticated } from "../../api/userApi";
import Adminsidebar from "../layouts/Adminsidebar";
import Navbar from "../layouts/Navbar";

const AdminCategory = () => {
    const [categories,setCategories] =useState([])
    const{token} = isAuthenticated()
    const[success,setSuccess]= useState(false)

    useEffect(()=>{
        getAllCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
              setSuccess(true)
                setCategories(data)
            }
        })
    },[success])
    const handleDelete = id => e => {
      e.preventDefault()
      setSuccess(false)
       swal("DeleteCategory","Are you sure want to delete desired category?", {
        buttons: {
          Cancel: "Cancel",
          Delete: "Delete",
          },
          icon:"warning"
      })
      .then((value) => {
        switch (value) {
          case "Cancel":
            swal("Cancel", "You Cancelled the operation Sucessfully", "Warning");
            break

            case"Delete":
        deleteCategory(id, token)
        .then(data =>{
          if(data.error){
            swal("Error!", data.err, "error");

          }
          else{
            setSuccess(true)
            swal("Success!", data.msg, "success");

          }
        })
        .catch(
          swal("Something went Wrong!")
        )
     break;
          default:
            swal("Something went wrong!");
        }
      });
    }
  return (
    <>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Adminsidebar category/>
          </div>

          <div className="col-md-9 p-5">
            <h2>Categories</h2>
            <table className='table w-75 table-hover text-center table-bordered'>
                <thead>
                    <tr className="table-dark">
                        <th>S.No</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                 categories && categories.map((category,i)=>{
                return <tr key={category._id}>
                    <td>{i+1}</td>
                    <td>{category.category_name}</td>
                    <td>
                        <div className="btn-group">
                          <Link to={`/admin/category/update/${category._id}`}>
                            <button className="btn btn-warning">Update</button></Link>
                            <button className="btn btn-danger " onClick={handleDelete(category._id)}>Delete</button>
                        </div>
                    </td>
                </tr>
            })
                    }

                </tbody>
            </table>
            <Link to ='/admin/category/add'>Add new category</Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCategory;
