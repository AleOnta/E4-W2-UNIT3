const initialState = {
  favourites: {
    favCompany: [],
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          favCompany: [...state.favourites.favCompany, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          favCompany: state.favourites.favCompany.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
