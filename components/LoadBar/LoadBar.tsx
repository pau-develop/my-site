import LoadBarStyled from "./LoadBarStyled";

interface LoadBarProps {
  loadingProgression?: number;
}

const LoadBar = ({ loadingProgression }: LoadBarProps): JSX.Element => {
  return (
    <LoadBarStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
    >
      <span>Loading</span>
      {loadingProgression !== undefined && (
        <span>{Math.round(loadingProgression * 100)} %</span>
      )}
    </LoadBarStyled>
  );
};

export default LoadBar;
