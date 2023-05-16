import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const Button = styled.button`
    background: #af93d7;
    font-family: inherit;
    padding: 0.4em 1.1em;
    font-weight: 900;
    font-size: 18px;
    margin-top: 1rem;
    border: 3px solid black;
    box-shadow: 0.1em 0.1em;
    &:hover {
      cursor: pointer;
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em;
    }
  `;

  return <Button> {props.text}</Button>;
};

export default Button;
