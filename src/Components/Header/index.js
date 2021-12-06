import React, { Component } from "react";
import styled from "styled-components";
export default class Header extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Logo>
              <img src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"} />
            </Logo>
            <NavWrapper>
              <NavLink>Home</NavLink>
              <NavLink>Overview</NavLink>
              <NavLink>How it Works</NavLink>
              <NavLink>TokenNomics</NavLink>
              <NavLink>Roadmapo</NavLink>
              <NavLink>Team</NavLink>
            </NavWrapper>
            <SocialWrapper>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/instagram.svg"}
                />
              </SocialIcon>
            </SocialWrapper>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  height: 80px;
  background-color: #000;
  color: #fff;
  /* font-family: "FADAM"; */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
  height: 100%;
  justify-content: space-between;
`;
const Logo = styled.div`
  cursor: pointer;
`;
const NavWrapper = styled.div`
  display: flex;
`;

const NavLink = styled.div`
  margin: 0 24px;
  height: 100%;
  cursor: pointer;
`;
const SocialWrapper = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const SocialIconImg = styled.img`
  width: 32px;
`;
