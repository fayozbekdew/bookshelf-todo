export const initialVal = {
    favoritList: localStorage.getItem("favorite")
      ? JSON.parse(localStorage.getItem("favorite"))
      : [],
  };
  function storeReducer(state, action) {
    switch (action.type) {
      case "add_favorite_list":
        return {
          ...state,
          favoritList: action.payload,
        };
      case "remove_favorite_list":
        return {
          ...state,
          favoritList: action.payload,
        };
      default:
        throw Error("Cannot match case in reducer");
    }
  }
  
  export default storeReducer;
  