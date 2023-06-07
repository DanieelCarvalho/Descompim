import Container from "react-bootstrap/Container";
import { ListGroup } from "../../ListGroup";

export const MinhasPastas = () => (
  <Container>
    <ListGroup
      items={[
        {
          title: "Matemática",
          total: 3,
        },
      ]}
    />
  </Container>
);
