import { Container } from "./styled.js";
import { Form } from "./Form";
import { Clock } from "./Clock";

function App() {

  return (
    <Container>
      <Clock />
      <Form/>
    </Container>
  );
}

export default App;
