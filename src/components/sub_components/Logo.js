import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  const Logo = styled(NavLink)`
    @import url("https://fonts.googleapis.com/css2?family=Dongle&family=Rubik+Pixels&family=Sedgwick+Ave+Display&display=swap");
    display: inline-block;
    color: ${(props) => props.theme.text};
    font-family: Sedgwick Ave Display;

    position: fixed;
    left: 45%;
    /* top: 1rem; */
    margin-top: 0.5rem;
    text-decoration: none;
    font-size: 32px;
    z-index: 3;
  `;
  return <Logo to="/">samuel.</Logo>;
};

export default Logo;
