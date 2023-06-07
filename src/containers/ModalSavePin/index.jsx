import { Modal } from "../../Components/Modal";
import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "../../Components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UseAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";
import { fetchFoldersAction, openModalCreateFolder } from "../../store/actions";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = UseAppContext();
  const hendleClose = () => {
    console.log("Fechando");
    dispatch(closeModalsAction());
  };

  const handleClickCreateFolder = () => {
    console.log("Clicou em criar pasta");
    dispatch(openModalCreateFolder());
  };

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <Modal
      title="Salvar pin"
      onHide={hendleClose}
      open={open}
      controls={[
        {
          label: "Criar pasta",
          variant: "secondary",
          loading: false,
          onClick: handleClickCreateFolder,
        },
      ]}
    >
      <ListGroup variant="flush">
        {state.folders.map((folder, index) => (
          <ListGroup.Item key={index}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <Button label="Salvar" loadingLabel="Salvando" />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  );
};
