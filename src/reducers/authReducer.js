// authReducer.js
import * as types from '../constant/authConstants';
import {
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_FAILURE,
} from '../constant/authConstants';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };

    case types.LOGIN_FAILURE:
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const authUserByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        userById: action.payload,
      };

    case FETCH_USER_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

