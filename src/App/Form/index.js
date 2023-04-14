import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result"
import { FormPart, FormInput, FormSelect, Header, Title, Button } from "./styled.js";

export const Form = ({ calculateResult, result } ) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <FormPart onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            <p>
                <label>
                    <Title>
                        Kwota w zł*:
                    </Title>
                    <FormInput
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
                    <Title>
                        Waluta:
                    </Title>
                    <FormSelect
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </FormSelect>
                </label>
            </p>
            <p>
                <Button>Oblicz</Button>
            </p>
            <Result result={result}/>
        </FormPart>
    )
}
