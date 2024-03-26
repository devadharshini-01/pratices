const Button = ({onClick, type, buttonName, color}) => {
  return (
    <>
      <button onClick={onClick} type={type} className={`btn mt-2 btn-${color}`}>
        {buttonName}
      </button>
    </>
  );
};
export default Button;
