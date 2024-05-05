//react
import { createContext, useReducer } from "react";
//reducer
import reducer, { initialVal } from "./Reducer";

export const BookContext = createContext();

function BookProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialVal);
  const addToFavorite = (product) => {
    const updateFavorite = state.favoritList;
    updateFavorite.push(product);
    dispatch({
      type: "add_favorite_list",
      payload: updateFavorite,
    });
    localStorage.setItem("favorite", JSON.stringify(state.favoritList));
  };
  const removeFromFavorite = (product) => {
    const updateFavorite = state.favoritList.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    dispatch({
      type: "remove_favorite_list",
      payload: updateFavorite,
    });
    state.favoritList = updateFavorite;
    localStorage.setItem("favorite", JSON.stringify(state.favoritList));
  };
  const value = {
    favoritList: state.favoritList,
    addToFavorite,
    removeFromFavorite
};
  return (
    <BookContext.Provider value={value}>{children}</BookContext.Provider>
  );
}

export default BookProvider;
