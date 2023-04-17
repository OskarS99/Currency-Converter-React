import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result"
import { FormStyled, FormInput, FormSelect, FormHeader, FormTitle, FormButton } from "./styled.js";

export const Form = ({ calculateResult, result } ) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <FormStyled onSubmit={onSubmit}>
            <FormHeader>
                Przelicznik walut
            </FormHeader>
            <p>
                <label>
                    <FormTitle>
                        Kwota w zł*:
                    </FormTitle>
                    <FormInput
                        min={0.01}                   
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
                    <FormTitle>
                        Waluta:
                    </FormTitle>
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
                <FormButton>Oblicz</FormButton>
            </p>
            <Result result={result}/>
        </FormStyled>
    )
}
