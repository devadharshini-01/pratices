import Form from "react-bootstrap/Form";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};
export default Input;
