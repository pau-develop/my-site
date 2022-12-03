import { IAction, IContextState, IContext } from "./ContextProvider";

const reducer = (previousState: IContextState, action: IAction) => {
  const newState = action.payload;
  console.log("LE STATE", newState);
  return newState;
};

export default reducer;
