import reducer from "./reducer";

import { createContext, Dispatch } from "react";

interface IActionTheme {
  payload: number;
}

export const changeThemeAction = (theme: number): IActionTheme => ({
  payload: theme,
});

export interface IThemeContext {
  theme: number;
  dispatch: Dispatch<IActionTheme>;
}

export const Context = createContext<IThemeContext>({
  theme: 0,
  dispatch: () => {},
});

import { useReducer } from "react";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const [theme, dispatch] = useReducer(reducer, 0);

  return (
    <Context.Provider value={{ theme, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
