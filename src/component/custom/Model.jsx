import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Model = ({
  show,
  handleClose,
  title,
  body,
  button1Value,
  button1Click,
  button2Value,
  button2Click,
  button1Color,
  button2Color,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {button1Value && (
            <Button
              variant="secondary"
              className={button1Color}
              onClick={button1Click}
            >
              {button1Value}
            </Button>
          )}
          {button2Value && (
            <Button
              variant="secondary"
              className={button2Color}
              onClick={button2Click}
            >
              {button2Value}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;
