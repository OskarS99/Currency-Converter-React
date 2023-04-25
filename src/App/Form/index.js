import React, { useState } from "react";
import { Result } from "./Result";
import {
  FormStyled,
  FormInput,
  FormSelect,
  FormHeader,
  FormTitle,
  FormButton,
  Loading,
  Failure,
} from "./styled.js";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <FormHeader>Przelicznik walut</FormHeader>
      {ratesData.status === "loading" ? (
        <Loading>
          Sekunda... <br />
          Ładuję kursy walut z Europejskeigo Banku Centralnego
        </Loading>
      ) : ratesData.status === "error" ? (
        <Failure>Hmm... Coś poszło nie tak</Failure>
      ) : (
        <>
          <p>
            <label>
              <FormTitle>Kwota w zł*:</FormTitle>
              <FormInput
                step="0.01"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę w zł"
                type="number"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <FormTitle>Waluta:</FormTitle>
              <FormSelect
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map((currency) => (
                  <option 
                  key={currency}
                  value={currency}
                  >
                    {currency}
                  </option>
                ))}
              </FormSelect>
            </label>
          </p>
          <p>
            <FormButton>Oblicz</FormButton>
          </p>
          <Result result={result} />
        </>
      )}
    </FormStyled>
  );
};
