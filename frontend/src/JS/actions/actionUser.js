import { GET_USERS } from "../constants/actionsTypes"
import axios from "axios"



export const getUsers = () => (dispatch) => {
    axios.get("/api/users")
        .then(res => dispatch({ type: GET_USERS, payload: res.data }))
        .catch(err => console.log(err))
}


export const addUser = (newUser) => (dispatch) => {
    axios.post("/api/users", newUser)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))

}

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`/api/users/${id}`)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}
