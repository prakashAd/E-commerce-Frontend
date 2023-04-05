import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../../api/userApi";
import Navbar from "../layouts/Navbar";

function Register() {
  let [username,setUsername] =useState('')
  let [email,setEmail] =useState('')
  let [password,setPassword] = useState('')
  let [error,setError] = useState('')
  let [success,setSuccess] =useState(false)

  const handleSubmit =(e) =>{
    e.preventDefault()
    userRegister(username,email,password)
    .then (data=>{
      if(data.error){
        setError(data.error)
        setSuccess(false)

      }
      else{
        setSuccess(true)
        setError('')
      }
    })
  }

  const showError =()=>{
    if(error){
      return <div className="alert alert-danger">{error}</div>
    }
  }
  
  const showSuccess =()=>{
    if(success){
      return <div className="alert alert-success">User registered sucessfully.please check your mail</div>
    }
  }
  
  return (
    <>
      <Navbar />
      {showError()}
      {showSuccess()}

      <div className="row">
        <div className="col-md-6 p-5 m-auto shadow-lg my-5">
          <main className="form-signin w-md-50 m-auto">
            <form>
              <img
                className="mb-4"
                src="./online pasal image/images.png"
                alt=""
                width="72"
                height="57"
              />
              <h1 className="h3 mb-3 fw-normal">Register</h1>

              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="f-name"
                  placeholder="first name" onChange={(e)=>{setUsername(e.target.value)}}
                />
                <label htmlFor="l-name">User Name</label>
              </div>
{/*  
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="l-name"
                  placeholder="last name"
                />
                 <label htmlFor="l-name">Last name</label>
              </div>

              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  placeholder="date of birth"
                />

                <label htmlFor="date of birth">Date of birth</label>

                <div className="form-floating">
                  <div className="gender">
                    <div className="gender-member">
                      <input type="radio" id="male" name=" gender" />

                      <label htmlFor="male">Male</label>

                      <input type="radio" id="female" name=" gender" />

                      <label htmlFor="female">Female</label>

                      <input type="radio" id="others" name=" gender" />

                      <label htmlFor="others">Others</label>
                    </div>
                  </div>
                </div>   */}

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
              {/* </div> */}
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Confirm Password"
                />
                <label htmlFor="cfloatingPassword">Confirm Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> I accept the
                  terms and conditions
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-success" type="submit" onClick={handleSubmit}>
                Register
              </button>

              <span>
                Already have an account? <Link to="/signin">Register here</Link>
              </span>

              <span>
                {" "}
                <Link to="/forgetpassword">Forget password</Link>
              </span>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default Register;
