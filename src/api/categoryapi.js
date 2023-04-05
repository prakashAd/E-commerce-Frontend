import {API} from '../config'

export const getAllCategories =() =>{
    return fetch(`${API}/getallcategories`)
    .then (res=>res.json())
    .catch(err=>console.log(err))
}

//add category
export const addCategory = (category_name, token)=>{
    return fetch(`${API}/addcategory`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization" :`Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to get category details
export const getcategoryDetails =(id)=>{
    return fetch(`${API}/categorydetails/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to update category

export const updatecategory = (id,category_name,token) =>{
    return fetch(`${API}/updatecategory/${id}`,{

        method: "PUT",
        headers:{
            "Content-Type" :"application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })

    .then(res=>res.json())
    .catch(err=>console.log(err))
}

//to delete category

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

//to edit user

export const editUser =  (id,token) =>{
    return fetch(`${API}/updateuser/${id}`,{

        method: "PUT",
        headers:{
            "Content-Type" :"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({role:1})
    })

    .then(res=>res.json())
    .catch(err=>console.log(err))
}
