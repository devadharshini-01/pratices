const Button = ({ onClick, type, buttonName, Icon, color, red,className }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`btn mt-2 bg-${color}  text-${red} ${className}`}
      >
        {buttonName} {Icon}
      </button>
    </>
  );
};
export default Button;
