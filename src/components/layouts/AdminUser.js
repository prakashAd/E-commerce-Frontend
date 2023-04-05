import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { editUser } from '../../api/categoryapi'

import { getAllUsers, isAuthenticated } from '../../api/userApi'
import Adminsidebar from './Adminsidebar'
import Navbar from './Navbar'

const AdminUser = () => {
    let[users,setusers] = useState()
    let[success,setSuccess] = useState()
    let{token}=isAuthenticated()

    useEffect(()=>{
        getAllUsers()
        .then(data=>{
            if (data.err) {
                console.log(data.error);
              } else {
                setusers(data);
              }
            });
        },[])
const handleEdit = id => e =>{
  e.preventDefault()
  setSuccess(false)
   swal("EditUser","Are you sure want to make desired user to admin?", {
    buttons: {
      Edit: "Add",
      Cancel: "Cancel",
      },
      icon:"warning"
  })
  .then((value) => {
    switch (value) {
      case "Cancel":
        swal("Cancel", "You Cancelled the operation Sucessfully", "Warning");
        break

        case"ADD":
    editUser(id,token)
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
              <Adminsidebar users />
            </div>

            <div className="col-md-9  p-5">
              <h2>Users</h2>
              <table className="table text-center table-hover table-bordered">
                <thead className='table-dark'>
                  <tr>
                    <td>S.No</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Is Admin?</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {  
                  users && users.map((user, i) => {
                      return <tr key={user._id}>
                          <td>{i+1}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>
                            {
                                user.role === 1?
                                <input type='checkbox' id={`${user._id}`} className='me-2'checked></input>
                                :
                                <input type='checkbox' id={`${user._id}`} className='me-2'></input>

                            }
                            <label htmlFor={`${user._id}`}>Yes</label>
                          </td>
                          <td> 
                          <button className='btn btn-info' onClick={handleEdit(user._id)}>Edit<i className='bi bi-pencil-square'></i></button>
                          </td>
                        </tr>
                      
                      
                    })
                    }
                </tbody>
              </table>
              </div>
              </div>
              </div>

    </>
  )
}

export default AdminUser