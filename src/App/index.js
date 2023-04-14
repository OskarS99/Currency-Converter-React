import { useState } from "react";
import { Container } from "./styled.js";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
