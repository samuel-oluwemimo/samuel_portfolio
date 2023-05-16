import React, { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Logo from "./sub_components/Logo";
import SocialIcons from "./sub_components/SocialIcons";
import Intro from "./Intro";
import { lightTheme } from "./Theme";
import BottomNav from "./sub_components/BottomNav";
import ParticleComponent from "./sub_components/ParticleComponent";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`;
const Container = styled.div`
  margin: auto;
  max-width: 1200px;
`;

// const BottomNav = styled.div`
//   position: absolute;
//   bottom: 1rem;
//   left: 0;
//   right: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-evenly;
// `;
// const About = styled(NavLink)`
//   z-index: 1;
//   text-decoration: none;
//   z-index: 3;
//   color: ${(props) => props.theme.text};
// `;
// const Skills = styled(NavLink)`
//   z-index: 1;
//   text-decoration: none;
//   z-index: 3;
//   color: ${(props) => props.theme.text};
// `;
// const Work = styled(NavLink)`
//   z-index: 1;
//   text-decoration: none;
//   z-index: 3;
//   color: ${(props) => props.theme.text};
// `;
const BannerText = styled.div`
  flex-direction: column;
  height: 100vh;
  weight: 100vw;
  display: flex;
  font-family: fantasy;
  justify-content: center;
  & > :first-child {
    text-align: center;
    font-size: 13vw;
  }
  & > :nth-child(2) {
    text-align: center;
    font-size: 13vw;
    z-index: 4;
  }
`;

const rotate = keyframes`
from { transform: scale(0.8); }
  to { transform: scale(1); }
`;
const Button = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  cursor: pointer;
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  & > :first-child {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }
  &:hover,
  & > :first-child {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
  }

  &:active,
  & > :first-child {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const op = setTimeout(myTimeout, 4000);
  // function myTimeout() {
  //   setClick(true);
  // }

  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Container>
          <Logo />
          <SocialIcons />
          {!click ? (
            <>
              <ParticleComponent theme="light" />
              <BannerText>
                <span>Crafting code </span>
                <span>that works</span>
              </BannerText>
              <Button onClick={() => handleClick()}>
                <span> let's go</span>
              </Button>
            </>
          ) : (
            <>
              <Intro click={click} onClick={() => handleClick()} />
              <BottomNav />
            </>
          )}

          {/* <BottomNav>
            <About to="/about" click={+click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                about
              </motion.h2>
            </About>
            <Skills to="/skill">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                skills
              </motion.h2>
            </Skills>
            <Work to="/work">
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                work
              </motion.h2>
            </Work>
          </BottomNav> */}
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Main;
