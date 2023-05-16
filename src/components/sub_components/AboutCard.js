import React from "react";
import styled from "styled-components";
import image from "../assets/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg";

const AboutCard = ({ img, text1, text2 }) => {
  const Card = styled.div`
    width: 400px;
    max-height: 80vh;
    display: grid;
    align-items: center;
    place-items: center;
    margin: 0 auto;
    font-family: Pacifico;
    & > :first-child {
      position: relative;
      top: 70%;
      left: -30%;
      width: 250px;
    }
    & > :nth-child(2) {
      width: 400px;
    }
    & > :last-child {
      position: relative;
      bottom: 70%;
      right: -30%;
      width: 250px;
    }
  `;

  return (
    <>
      <Card>
        <h3>
          "I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
        </h3>
        <img src={image} />
        <h3>"I'm a front-end developer located in India.</h3>
      </Card>
    </>
  );
};

export default AboutCard;
