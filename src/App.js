import { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Brand from "./Components/Brands";
import FAQ from "./Components/FAQ";
import Roadmap from "./Components/RoadMap";
import Section from "./Components/Sections/index";
import Subscribe from "./Components/Subscribe";
import Team from "./Components/Team";
import TokenNomics from "./Components/TokenNomics";
import MainPage from "./Container/MainPage";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <MainPage>
        <Section />
        <TokenNomics />
        <Roadmap />
        <Team />
        <Brand />
        <Subscribe />
        <FAQ />
      </MainPage>
    </div>
  );
}

export default App;
