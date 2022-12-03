import LoadBarStyled from "./LoadBarStyled";

const LoadBar = (): JSX.Element => {
  return (
    <LoadBarStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
    >
      <span>Loading</span>
      <div></div>
    </LoadBarStyled>
  );
};

export default LoadBar;
