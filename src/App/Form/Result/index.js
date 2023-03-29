import React from "react";
import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount.tofixed(2)}&nbps;PLN&nbps;=
                {" "}

                <strong>
                    {result.targetAmount.tofixed(2)}&nbps;{result.currency}
                </strong>
            </>
        )}
    </p>
);
