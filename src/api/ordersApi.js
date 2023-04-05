import { API } from "../config";

export const placeOrder = (order, token) => {
  return fetch(`${API}/placeorder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const getMyorders = (id) => {
  return fetch(`${API}/getuserorders/${id}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}; 
