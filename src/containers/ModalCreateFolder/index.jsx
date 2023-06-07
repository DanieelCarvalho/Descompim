import { Modal } from "../../Components/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { UseAppContext } from "../../store/AppContext";
import { closeModalsAction, saveFoldersAction } from "../../store/actions";
import { saveFoldersInitType, saveFoldersSuccessType } from "../../store/types";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = UseAppContext();
  const [folderName, setFolderName] = useState("");

  const handleClose = () => {
    dispatch(closeModalsAction());
  };
  const handleSubimit = (e) => {
    e.preventDefault();
    console.log("Fez o submit", folderName);
    saveFoldersAction(dispatch, folderName);
    // handleClose();
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  useEffect(() => {
    if (state.type === saveFoldersSuccessType) {
      handleClose();
    }
  }, [state.type]);

  return (
    <Modal
      onHide={handleClose}
      title="Criar pasta"
      open={open}
      controls={[
        {
          label: "Criar e salvar",
          loadingLabel: "Criando  ",
          variant: "secondary",
          loading: state.type === saveFoldersInitType,
          type: "submit",
          form: "form-criar-pasta",
        },
      ]}
    >
      <Form onSubmit={handleSubimit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex:Matemática"
            value={folderName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Modal>
  );
};
