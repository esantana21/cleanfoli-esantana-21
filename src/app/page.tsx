"use client";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import { ThemeContext } from "./contexts/theme";
import { useContext } from "react";
import { ThemeProvider } from "./contexts/theme";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./global.css";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

const Home = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
