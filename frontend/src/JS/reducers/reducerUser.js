import { GET_USERS } from "../constants/actionsTypes";



const intialState = {
    users: []
}

const reducerUser = (state = intialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }

        default:
            return state;
    }
}

export default reducerUser