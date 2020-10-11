import React from "react";
import { ThemeProvider } from "styled-components";

import Toggle from "./components/Theme/Toggler";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { useDarkMode } from "./components/Theme/useDarkMode";
import "./App.css";

import { Provider } from "./components/utils/constants";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import Dashboard from "./components/Dashboard/Dashboard";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import StackProgress from "./components/SkillProgress/SkillProgress";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import GithubProfileCard from "./components/GithubProfileCard/GithubProfileCard";
import Education from "./components/Education/Education";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Provider
      value={{
        isDark: theme !== "light" ? true : false,
      }}
    >
      <div className="App">
        <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />

          <Dashboard />
          <Skills />
          <StackProgress isDark={theme !== "light" ? true : false} />
          <Education />
          <WorkExperience />
          <Project />
          <GithubProfileCard isDark={theme !== "light" ? true : false} />
          <Footer />

          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
