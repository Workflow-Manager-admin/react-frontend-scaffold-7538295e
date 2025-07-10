import React, { createContext, useContext, useReducer } from "react";

// Initial state and reducer
const initialState = {
  theme: "light"
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}

const AppContext = createContext();

// PUBLIC_INTERFACE
export function AppProvider({ children }) {
  /** Context provider for global state. */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAppContext() {
  /** Custom hook to use app global state. */
  return useContext(AppContext);
}
