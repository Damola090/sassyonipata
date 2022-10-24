import axios from 'axios';


import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    CLEAR_ERRORS

} from '../constants/userConstants';


//LOGIN
export const login = (email, password) => async (dispatch) => {

    try {

        console.log(email, password)

        dispatch({ type: LOGIN_REQUEST })


        const response  = await fetch('http://192.168.43.145:3000/api/v1/user/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                 email : email,
                password : password
            }),

        })

        const data = await response.json()

        console.log(data.token)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (err) {

        dispatch({
            type: LOGIN_FAIL,
            payload: 'message'
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })

}

// //Register User
// export const register = (userData) => async (dispatch) => {

// }
