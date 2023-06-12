import Container from "react-bootstrap/Container";
import { ListGroup } from "../../ListGroup";
import { UseAppContext } from "../../../store/AppContext";

const adaptersItemns = (items) => {
  return items.map((item) => ({
    title: item.name,
    total: item.pins.length,
  }));
};

export const MinhasPastas = () => {
  const { state } = UseAppContext();

  return (
    <Container>
      <ListGroup items={adaptersItemns(state.folders)} />
    </Container>
  );
};
