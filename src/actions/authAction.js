// authActions.js
import * as types from "../constant/authConstants";
import axios from "axios";
import {
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_FAILURE,
} from '../constant/authConstants';

// Action creators for login
export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

// Action creators for signup
export const signupRequest = () => ({
  type: types.SIGNUP_REQUEST,
});

export const signupSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  payload: error,
});
const host = process.env.REACT_APP_API_URL;

// Async action for login
export const loginUser = (credentials) => {
  console.log(credentials);
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      // Replace with your actual login API endpoint
      const response = await axios.post(`${host}/api/auth/login`, credentials);
      console.log(response);
      // Assuming the API response contains user data
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

// Async action for signup
export const signupUser = (userData) => {
  console.log(userData);
  return async (dispatch) => {
    dispatch(signupRequest());

    try {
      // Replace with your actual signup API endpoint
      const response = await axios.post(`${host}/api/auth/register`, userData);
      // Assuming the API response contains user data
      console.log(response);
      dispatch(signupSuccess(response.data));
    } catch (error) {
      dispatch(signupFailure(error.message));
    }
  };
};

export const fetchUserById = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_USER_BY_ID_REQUEST });

  try {
    const response = await axios.get(`${host}/api/auth/${userId}`);

    dispatch({
      type: FETCH_USER_BY_ID_SUCCESS,
      payload: response.data, // Adjust based on your API response structure
    });
    console.log(response)
  } catch (error) {
    dispatch({
      type: FETCH_USER_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};