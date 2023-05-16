import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "animate.css";

const BottomNav = () => {
  const Nav = styled.div`
    position: absolute;
    z-index: 4;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    max-width: 1200px;
    margin: auto;
    justify-content: space-evenly;
  `;
  const About = styled(NavLink)`
    z-index: 1;
    text-align: center;
    text-decoration: none;
    z-index: 3;
    width: -webkit-fill-available;
    color: ${(props) => props.theme.text};
    & > :hover {
      cursor: pointer;
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      transition: 200ms background ease-in;
    }
    & > :first-child {
      padding: 10px;
    }
  `;
  const Skills = styled(NavLink)`
    z-index: 1;
    text-align: center;
    text-decoration: none;
    border-right: 2px solid black;
    border-left: 2px solid black;
    z-index: 3;
    width: -webkit-fill-available;
    color: ${(props) => props.theme.text};
    & > :hover {
      cursor: pointer;
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      transition: 200ms background ease-in;
    }
    & > :first-child {
      padding: 10px;
    }
  `;
  const Work = styled(NavLink)`
    z-index: 1;
    text-align: center;
    text-decoration: none;
    z-index: 3;
    width: -webkit-fill-available;
    color: ${(props) => props.theme.text};
    & > :hover {
      cursor: pointer;
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      transition: 200ms background ease-in;
    }
    & > :first-child {
      padding: 10px;
    }
  `;
  return (
    <Nav
      class="
    animate__slideInUp"
    >
      <About to="/about">
        <p>about</p>
      </About>
      <Skills to="/skill">
        <p>skills</p>
      </Skills>
      <Work to="/work">
        <p>work</p>
      </Work>
    </Nav>
  );
};

export default BottomNav;
