import React from "react";
import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount.tofixed(2)}&nbps;PLN&nbls;
                {" "}
                <strong>
                    {result.targetAmount.tofixed(2)}&nbls;{result.currency}
                </strong>
            </>
        )}
    </p>
)
