import React, { createContext, useReducer } from "react";

const AppContext = createContext({});

const initialState = {
  posts: [],
  loading: true,
  error: false,
};

const AppContext = createContext({ state: initialState, dispatch: () => null });
