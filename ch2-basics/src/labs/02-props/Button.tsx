type ButtonProps = {
  onClick: () => void;
};

export const Button = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>hit me!</button>;
};
