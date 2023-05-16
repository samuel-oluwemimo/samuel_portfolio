import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoGithub, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background: ${(props) => props.theme.text};
`;
const Github = styled(IoLogoGithub)`
  weight: 25;
  height: 25;
  color: ${(props) => props.theme.text};
  font-size: 25px;
`;
const Twitter = styled(IoLogoTwitter)`
  weight: 25;
  height: 25;
  color: ${(props) => props.theme.text};
  font-size: 25px;
`;
const Whatsapp = styled(IoLogoWhatsapp)`
  weight: 25;
  height: 25;
  color: ${(props) => props.theme.text};
  font-size: 25px;
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://github.com/samuel-oluwemimo"
        >
          <Github />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://twitter.com/OluwemimoSamue1"
        >
          <Twitter />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "" }}
        >
          <Whatsapp />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
