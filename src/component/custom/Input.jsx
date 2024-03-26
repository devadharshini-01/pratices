import Form from 'react-bootstrap/Form';

const Input =({label,type,name,value,onChange,edit})=>{
    return(
        <>
          <Form.Label >{label}</Form.Label>
       <Form.Control type={type} name={name} value={value} onChange={onChange}  />
        </>
    )
}
export default Input;