import { Card } from "../../../Card";
import { useState, useEffect } from "react";
import { CardContainer } from "../../../../containers/CardContainers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ModalSavePin } from "../../../../containers/ModalSavePin";
import { ModalCreateFolder } from "../../../../containers/ModalCreateFolder";
import { Notification } from "../../../Notification";
import { HeaderPartials } from "../../../../Partials/HeaderPartials";
import { UseAppContext } from "../../../../store/AppContext";
import { saveFoldersSuccessType } from "../../../../store/types";

export const HomePage = () => {
  const [open, setOpen] = useState(true);
  const { state, dispatch } = UseAppContext();
  const [showFeedback, setShowFeedback] = useState(false);

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
          <Col xs={12} md={2}>
            <CardContainer
              id="123"
              title="matematica"
              image="https://img.freepik.com/fotos-gratis/ceu_53876-47159.jpg?w=740&t=st=1684411605~exp=1684412205~hmac=55137b9de4e4a17c2db3675f20052925079e79d49984741c2c64b5329cef2127"
              total={0}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
