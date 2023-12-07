import {
  FETCH_EXERCISES_REQUEST,
  FETCH_EXERCISES_SUCCESS,
  FETCH_EXERCISES_FAILURE,
  EVALUATE_ANSWER_REQUEST,
  EVALUATE_ANSWER_SUCCESS,
  EVALUATE_ANSWER_FAILURE,
} from "../constant/exerciseConstants";

const initialState = {
  exercises: [],
  loading: false,
  error: null,
  evaluationResult: null,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_EXERCISES_SUCCESS:
      return { ...state, loading: false, exercises: action.payload };
    case FETCH_EXERCISES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case EVALUATE_ANSWER_REQUEST:
      return { ...state, loading: true, error: null };
    case EVALUATE_ANSWER_SUCCESS:
      return { ...state, loading: false, evaluationResult: action.payload };
    case EVALUATE_ANSWER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default exerciseReducer;
