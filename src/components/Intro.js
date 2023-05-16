import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./sub_components/Button";
import img from "./assets/herobg.jpg";
import { NavLink } from "react-router-dom";
import "animate.css";

const Main = styled.div`
  flex-direction: column;
  height: 100vh;
  weight: 100vw;
  display: grid;
  border: 2px solid black;
  place-items: center;
  /* & > :last-child {
    z-index: 2;
    position: absolute;
    top: 10%;
    left: calc(15% + 50vw);
  } */
`;
const DarkDiv = styled(motion.div)`
  height: 500px;
  width: 100% !important;
  border: 2px solid rgb(1, 1, 1);
  background: white;
  font-family: "Dongle", sans-serif;
  display: flex;
  align-items: center;

  box-shadow: 0px 0px 0 var(--color-navy);
  transition: box-shadow 200ms ease 0s, transform 200ms ease 0s;
  /* transform: rotate(16deg); */
  & > :last-child {
    height: -webkit-fill-available;
    border-left: 2px solid black;
  }
  @media only screen and (max-width: 1100px) {
    & > :last-child {
      height: -webkit-fill-available;
      width: 400px;
      border-left: 2px solid black;
    }
  }
  @media only screen and (max-width: 900px) {
    & > :last-child {
      height: -webkit-fill-available;
      width: 300px;
      border-left: 2px solid black;
    }
  }
  @media only screen and (max-width: 600px) {
    & > :last-child {
      height: -webkit-fill-available;
      width: 200px;
      border-left: 2px solid black;
    }
  }
`;
const Text = styled(motion.div)`
  color: ${(props) => props.theme.text};
  padding: 2rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;

  backdrop-filter: blur(4px);
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  & > :first-child {
    font-weight: 900;
    font-size: calc(0.8rem + 1vw);
  }
  & > :nth-child(2) {
    line-height: 2rem;
  }
`;
const blue = "lightblue";
const Intro = ({ click }) => {
  return (
    <Main>
      <DarkDiv>
        <Text>
          <h3 class="animate__animated animate__fadeIn animate__delay-1s">
            Hi, i'm oluwemimo samuel.
          </h3>
          <p class="animate__animated animate__fadeIn animate__delay-1s">
            Welcome to my digital workspace, where I bring ideas to life through
            clean code and innovative solutions
          </p>
          <NavLink target="_blank" to="mailto:ayodejioluwemimo@gmail.com">
            <Button
              class="animate__animated animate__fadeIn animate__delay-1s"
              text={"say hi"}
            />
          </NavLink>
        </Text>
        <img
          class="animate__animated animate__slideInLeft animate_fast "
          src={img}
        />
      </DarkDiv>
    </Main>
  );
};

export default Intro;
