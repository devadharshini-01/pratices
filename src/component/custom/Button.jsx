const Button = ({onClick, type, buttonName,Icon,color,red}) => {
  return (
    <>
      <button onClick={onClick} type={type} className={`btn mt-2 bg-${color}  text-${red}`  } >
        {buttonName} {Icon} 
      </button>
    </>
  );
};
export default Button;
