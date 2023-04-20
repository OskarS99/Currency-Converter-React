import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 40px auto;
  border-radius: 10px;
  border-color: #ffffff;
`;

export const FormHeader = styled.h1`
  color: white;
`;

export const FormTitle = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: larger;
  width: 100%;
  max-width: 150px;
  margin-right: 10px;
  display: inline-block;
  padding: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  padding: 10px;
`;

export const FormSelect = styled.select`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  padding: 10px;
`;

export const FormButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  color: #000000;
  padding: 5px;
  border: #000000;
  width: 100%;
`;

 export const Loading = styled.p`
    color: teal;
 `;

export const Failure = styled.p`
  color: crimson;
`;
 