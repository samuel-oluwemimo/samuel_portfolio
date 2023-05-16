import React from "react";
import Logo from "./sub_components/Logo";
import styled from "styled-components";
import { motion } from "framer-motion";
import BottomNav from "./sub_components/BottomNav";
import "animate.css";

const WorkPage = () => {
  const Backdrop = styled.h1`
    font-size: 45vw;
    position: absolute;
    top: 20%;
    right: -8%;
    color: #999;
    animation: animate__slideOutRight;
    animation-duration: 2s;
  `;
  return (
    <>
      <Logo />
      <Backdrop>Work</Backdrop>
      <BottomNav />
    </>
  );
};

export default WorkPage;
