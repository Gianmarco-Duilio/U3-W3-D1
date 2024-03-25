const initialState = {
  favorites: {
    content: [],
  },
};
const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.concat(action.payload),
        },
      };
    case "DELETE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter((company, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
