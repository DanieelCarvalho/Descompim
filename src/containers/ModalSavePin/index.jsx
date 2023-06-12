import { Modal } from "../../Components/Modal";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "../../Components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UseAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";
import {
  fetchFoldersAction,
  openModalCreateFolder,
  savPinInFolderAction,
} from "../../store/actions";

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = UseAppContext();
  const [itensLoading, setItensLoading] = useState({});
  const hendleClose = () => {
    console.log("Fechando");
    dispatch(closeModalsAction());
  };

  const handleClickCreateFolder = () => {
    console.log("Clicou em criar pasta");
    dispatch(openModalCreateFolder());
  };
  const handleClick = async (folderId) => {
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: true,
      };
    });
    await savPinInFolderAction(dispatch, state.activePinId, folderId);
    console.log("Clicoou em salvar", folderId, state.activePinId);
    setItensLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: false,
      };
    });
  };
  const foldersNormalized = state.folders.map((folder) => {
    return {
      ...folder,
      saved: folder.pins.includes(state.activePinId),
    };
  });

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, []);

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
        {foldersNormalized.map((folder, index) => (
          <ListGroup.Item key={index}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <Button
                  label={folder.saved ? "Salvo" : "Salvar"}
                  loadingLabel="Salvando"
                  onClick={() => handleClick(folder.id)}
                  variant={folder.saved ? "secondary" : "primary"}
                  disable={true}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  );
};
