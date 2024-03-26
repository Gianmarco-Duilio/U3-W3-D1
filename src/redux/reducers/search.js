import { GET_JOBS } from "../actions";

const initialState = {
  available: [],
};
const searchJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        available: action.payload,
      };

    default:
      return state;
  }
};
export default searchJobsReducer;
