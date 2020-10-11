import React, { createContext, useReducer, useContext } from "react";
import postsReducer from "./reducers/posts.js";

const initialState = {
  posts: null,
  loading: true,
  error: false,
};

const store = createContext(initialState);
const { Provider } = store;

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };
