import { userState } from "../state/userState";
const initialState = userState;

export function userReducer(state = initialState, action) {

    switch (action.type) {

        case 'ADD_USER_DETAILS':
            return {
                ...state,
                ...action.user
            }

        default:
            return state;
    }
}






