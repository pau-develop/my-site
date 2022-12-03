import reducer from "./reducer";

import { createContext, Dispatch } from "react";

export interface IContextState {
  theme: number;
  isLoading: boolean;
}
export interface IAction {
  payload: IContextState;
}

export const changeStateAction = (contextState: IContextState): IAction => ({
  payload: contextState,
});

export interface IContext {
  state: IContextState;
  dispatch: Dispatch<IAction>;
}

export const Context = createContext<IContext>({
  state: {
    theme: 0,
    isLoading: false,
  },
  dispatch: () => {},
});

import { useReducer } from "react";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const contextState: IContextState = {
    theme: 0,
    isLoading: false,
  };
  const [state, dispatch] = useReducer(reducer, contextState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
