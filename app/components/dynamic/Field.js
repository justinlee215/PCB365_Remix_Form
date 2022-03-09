import { Form } from "react-bootstrap";
const Field = ({ field, fieldChanged, type, value }) => {
  return (

    <Form.Group className="mb-3" key={field._uid}>
      <Form.Label>{field.label}</Form.Label>

      <Form.Control type={type || field.component} id={field._uid} value={value}  onChange={(e) => {
          // Notify the main state list of the new value
          fieldChanged(field._uid, e.target.value);
        }}/>
      {/* { errors[label] && <span>Required! {errors[label].message}</span>} */}
    </Form.Group>
  );
};

export default Field;
