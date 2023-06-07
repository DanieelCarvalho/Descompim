import ModalBT from "react-bootstrap/Modal";
import { Button } from "../Button";
export const Modal = ({ title, children, open, controls = [], onHide }) => {
  return (
    <ModalBT show={open} onHide={onHide}>
      <ModalBT.Header closeButton>
        <ModalBT.Title>{title}</ModalBT.Title>
      </ModalBT.Header>
      <ModalBT.Body> {children}</ModalBT.Body>
      <ModalBT.Footer>
        {controls.map((control, controlIndex) => (
          <Button key={controlIndex} {...control} />
        ))}
      </ModalBT.Footer>
    </ModalBT>
  );
};
