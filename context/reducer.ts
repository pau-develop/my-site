export interface IActionTheme {
  payload: number;
}

const reducer = (previousState: number, action: IActionTheme) => {
  const newState = action.payload;
  return newState;
};

export default reducer;
