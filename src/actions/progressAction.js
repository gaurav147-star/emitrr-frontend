import axios from 'axios';
import {
  UPDATE_PROGRESS_REQUEST,
  UPDATE_PROGRESS_SUCCESS,
  UPDATE_PROGRESS_FAILURE,
  FETCH_PROGRESS_REQUEST,
  FETCH_PROGRESS_SUCCESS,
  FETCH_PROGRESS_FAILURE,
  FETCH_ALL_PROGRESS_REQUEST,
  FETCH_ALL_PROGRESS_SUCCESS,
  FETCH_ALL_PROGRESS_FAILURE,
} from '../constant/progressConstant';

const host = process.env.REACT_APP_API_URL;

export const updateProgress = (userId, record) => async (dispatch) => {
  dispatch({ type: UPDATE_PROGRESS_REQUEST });

  try {
    const response = await axios.post(`${host}/api/progress/update`, {
      userId,
      record,
    });

    dispatch({
      type: UPDATE_PROGRESS_SUCCESS,
      payload: response, 
    });
    console.log(response)
  } catch (error) {
    dispatch({
      type: UPDATE_PROGRESS_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchProgress = (userId) => async (dispatch) => {
    dispatch({ type: FETCH_PROGRESS_REQUEST });
  
    try {
      const response = await axios.get(`${host}/api/progress/${userId}`);
  
      dispatch({
        type: FETCH_PROGRESS_SUCCESS,
        payload: response.data, 
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROGRESS_FAILURE,
        payload: error.message,
      });
    }
  };


  export const fetchAllProgress = () => async (dispatch) => {
    dispatch({ type: FETCH_ALL_PROGRESS_REQUEST });
  
    try {
      const response = await axios.get(`${host}/api/progress/all`);
  
      dispatch({
        type: FETCH_ALL_PROGRESS_SUCCESS,
        payload: response.data, 
      });
    } catch (error) {
      dispatch({
        type: FETCH_ALL_PROGRESS_FAILURE,
        payload: error.message,
      });
    }
  };