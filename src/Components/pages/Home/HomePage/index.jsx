import { useState, useEffect } from "react";
import { CardContainer } from "../../../../containers/CardContainers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ModalSavePin } from "../../../../containers/ModalSavePin";
import { ModalCreateFolder } from "../../../../containers/ModalCreateFolder";
import { Notification } from "../../../Notification";
import { UseAppContext } from "../../../../store/AppContext";
import { saveFoldersSuccessType } from "../../../../store/types";
import { fetchPinsAction } from "../../../../store/actions";

export const HomePage = () => {
  const [open, setOpen] = useState(true);
  const { state, dispatch } = UseAppContext();
  const [showFeedback, setShowFeedback] = useState(false);

  const pinNormalized = state.pins.map((pin) => {
    return {
      ...pin,
      total: state.folders.filter((folder) => {
        return folder.pins.includes(pin.id);
      }).length,
    };
  });
  useEffect(() => {
    fetchPinsAction(dispatch);
  }, []);

  useEffect(() => {
    if (state.type === saveFoldersSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type]);
  return (
    <div>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFoder"} />
      {showFeedback && (
        <Notification
          message="Criado com sucesso"
          onClose={() => {
            setShowFeedback(false);
          }}
        />
      )}
      <Container fluid>
        <Row>
          {pinNormalized.map((pin) => (
            <Col key={pin.id} xs={12} md={2}>
              <CardContainer {...pin} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
