import React from "react";
import Logo from "./sub_components/Logo";
import SocialIcons from "./sub_components/SocialIcons";
import styled from "styled-components";
import BottomNav from "./sub_components/BottomNav";
import "animate.css";
import img from "./assets/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg";

const About = () => {
  const AboutMain = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  `;
  const Main = styled.div`
    width: 100vw;
    height: 100vh;
    width: 1200px;
    margin: auto;
    border-left: 2px solid black;
    border-right: 2px solid black;
    position: relative;
    padding-bottom: 5rem;
    z-index: 2;

    & > :first-child {
      position: relative;
      top: 11.5%;
    }
  `;
  const AboutDiv = styled.div`
    border-top: 2px solid black;
    overflow-y: scroll;
    border-bottom: 2px solid black;
    background: url{img};
    background-size: cover;
    height: 500px;
    width: 100% !important;
    font-family: "Dongle", sans-serif;
    position: absolute;
    top: 30%;
    & > :first-child {
      width: 30vw;
    }
    & > :ntn-child {
      float: right;
    }
  `;

  return (
    <AboutMain>
      <Logo />
      <Main>
        <div class="animate__animated animate__slideInUp animate__fast">
          <AboutDiv>
            <img
              src={img}
              class="animate__animated animate__slideInDown animate__fast"
            />
            <div>
              <h3>
                'My name is Oluwemimo Samuel, and I am a recent graduate of Afe
                Babalola University, where I earned my degree in computer
                science. Throughout my studies, I developed a deep passion for
                web development and have been working diligently to build my
                skills ever since.'
              </h3>
              <h3></h3>
            </div>
          </AboutDiv>
        </div>
      </Main>
      <SocialIcons />
      <BottomNav />
    </AboutMain>
  );
};

export default About;
