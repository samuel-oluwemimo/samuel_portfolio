import React from "react";
import GlobalStyle from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Theme";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import WorkPage from "./components/WorkPage";
import SkillsPage from "./components/SkillsPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skill" element={<SkillsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
