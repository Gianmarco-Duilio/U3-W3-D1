import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../actions";

const initialState = {
  content: [],
};
const favoritesJobs = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        ...state.content,
        content: state.content.concat(action.payload),
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,

        ...state.content,
        content: state.content.filter((company, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesJobs;
