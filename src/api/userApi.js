import {API} from '../config'


export const userRegister = (username,email,password) =>{
    let user ={username,email,password}
    return fetch (`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
})
.then(response=> {return response.json()})
.catch(error =>console.log(error))
}

//user email verification

export const emailConfirmation  =(token)=>{
    return fetch(`${API}/verifyEmail/${token}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },

    })

    .then(res=> res.json())
.catch(err =>console.log(err))

}
//forget password

export const forgetPassword = (email)=>{
    return fetch(`${API}/forgetpassword`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})

    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//reset password

export const resetPassword = (password,token)=>{
    return fetch(`${API}/resetpassword/${token}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})

    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


//signin

export const signIn = (email,password,role)=>{

    return fetch (`${API}/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        
        },
        body:JSON.stringify({email,password,role})

    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to keep signed in
export const authenticate = (data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}
//to check if loged in
export const isAuthenticated = ()=>{
 return localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : false
}


// to sign out
export const signout = () => {
    return fetch (`${API}/signout`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to get all user
export const getAllUsers = () => {
    return fetch (`${API}/getUserList`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const deleteCategory =  (id, token) =>{
    return fetch(`${API}/deletecategory/${id}`,{

        method: "DELETE",
        headers:{
            "Content-Type" :"application/json",
            Authorization:`Bearer ${token}`
        },
    })

    .then(res=>res.json())
    .catch(err=>console.log(err))
}