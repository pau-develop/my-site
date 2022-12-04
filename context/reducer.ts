import { IAction, IContextState, IContext } from "./ContextProvider";

const reducer = (previousState: IContextState, action: IAction) => {
  const newState = action.payload;

  return newState;
};

export default reducer;
