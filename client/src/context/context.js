import React, { createContext, useReducer, useContext } from "react";
import postsReducer from "./reducers/posts.js";
import api from "../utils/api";
const initialState = {
  posts: null,
  loading: true,
  error: false,
};

const AppStateContext = createContext(initialState);
const AppDispatchContext = createContext(() => null);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}
function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}

export { AppProvider, useAppState, useAppDispatch };
