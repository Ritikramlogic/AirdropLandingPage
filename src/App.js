import styled from "styled-components";
import "./App.css";
import Brand from "./Components/Brands";
import FAQ from "./Components/FAQ";
import Subscribe from "./Components/Subscribe";
import Team from "./Components/Team";
import MainPage from "./Container/MainPage";
function App() {
  return (
    <div className="App">
      <MainPage>
        <HeroSectionContainer>
          <Section1Container>
            <Section1Content>
              <Section1Logo
                src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
              />
              <Section1Logo
                src={process.env.PUBLIC_URL + "assets/img/NFT.svg"}
              />
              <h3>
                A Frictionless Platform For Creating, Trading, And Distribution
                Nfts.
              </h3>
              <Section1Button>
                <div
                  style={{
                    width: "200px",
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "assets/img/items/button2.svg"
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "50px",
                    width: "150px",
                  }}
                ></div>
                <div
                  style={{
                    width: "200px",
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "assets/img/items/button1.svg"
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "50px",
                    width: "150px",
                  }}
                ></div>
              </Section1Button>
            </Section1Content>
            <Section1ImgContainer>
              <img
                width="400px"
                src={process.env.PUBLIC_URL + "assets/img/images/section2.png"}
              />
            </Section1ImgContainer>
          </Section1Container>
          <Section2Wrapper>
            <Section2Logo
              src={process.env.PUBLIC_URL + "assets/img/introNFT.svg"}
            />
            <Section2Container>
              <Section2Image1Container>
                <img
                  width="400px"
                  src={
                    process.env.PUBLIC_URL + "assets/img/images/section2.png"
                  }
                />
              </Section2Image1Container>
              <Section2Content>
                <div>
                  Non Fungible Tokens (NFTs) have many use cases,an NFT is a
                  unit of data stored on a digital ledger,called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable.
                </div>
                <h2>NFTs can be used to:</h2>
                <Section2ListWrapper>
                  <Section2ListContainer>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      remove intermediaries
                    </Section2List>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      store record of ownership
                    </Section2List>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      provide immutable provenance
                    </Section2List>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      connect artists with audiences
                    </Section2List>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      promote brands
                    </Section2List>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      create new markets
                    </Section2List>
                    <Section2List>
                      <Section2ListSpan
                        width="12px"
                        src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                      />
                      drive growth of the Metaverse
                    </Section2List>
                  </Section2ListContainer>
                </Section2ListWrapper>
              </Section2Content>

              <Section2Image2Container>
                <img
                  width="300px"
                  src={
                    process.env.PUBLIC_URL + "assets/img/images/section2.png"
                  }
                />
              </Section2Image2Container>
            </Section2Container>
          </Section2Wrapper>
          <Section3Container>
            <Section3Content></Section3Content>
          </Section3Container>
        </HeroSectionContainer>
        <Team />
        <Brand />
        <Subscribe />
        <FAQ />
      </MainPage>
    </div>
  );
}

const HeroSectionContainer = styled.div`
  padding: 72px;
  background: black;
  color: #fff;
`;
const Section1Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 72px 0;
`;
const Section1Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-right: 72px;
`;
const Section1Logo = styled.img`
  width: 300px;
  margin: 0.8rem 0;
`;
const Section1Button = styled.div`
  display: flex;
`;
const Section1ImgContainer = styled.div``;
const Section2Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Section2Logo = styled.img`
  width: 700px;
`;
const Section2Container = styled.div`
  display: flex;
  align-items: center;
  padding: 72px 0;
  justify-content: center;
`;
const Section2Content = styled.div`
  width: 400px;
  text-align: left;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section2ListWrapper = styled.div`
  display: flex;
`;
const Section2Image1Container = styled.div``;
const Section2ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
`;
const Section2Image2Container = styled.div`
  align-self: end;
`;
const Section2ListSpan = styled.img`
  border-radius: 999px;
  margin-right: 10px;
`;
const Section2List = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;
const Section3Container = styled.div``;
const Section3Content = styled.div``;
export default App;
