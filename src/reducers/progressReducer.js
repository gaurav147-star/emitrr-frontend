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
} from "../constant/progressConstant";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROGRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UPDATE_PROGRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case UPDATE_PROGRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const progressFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROGRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PROGRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_PROGRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const progressAllReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_PROGRESS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case FETCH_ALL_PROGRESS_SUCCESS:
        return {
          ...state,
          loading: false,
          allProgress: action.payload,
        };
  
      case FETCH_ALL_PROGRESS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  