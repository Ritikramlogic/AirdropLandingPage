import React, { Component } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Sidebar";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: false,
    };
    this.SidebarToogle = this.SidebarToogle.bind(this);
  }
  SidebarToogle() {
    this.setState({ toogle: !this.state.toogle });
  }
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Logo>
              <img src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"} />
            </Logo>
            <Hamburger onClick={this.SidebarToogle}>
              <GiHamburgerMenu size={30} />
            </Hamburger>

            {/*For Mobile Interface*/}
            <Sidebar
              toogleButton={this.SidebarToogle}
              too={this.state.toogle}
            />
            {/* For Desktop interface */}

            <NavWrapper>
              <NavLink>Home</NavLink>
              <NavLink>Overview</NavLink>
              <NavLink>How it Works</NavLink>
              <NavLink>TokenNomics</NavLink>
              <NavLink>Roadmap</NavLink>
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
  background-color: #380936;
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
const Hamburger = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;
const Logo = styled.div`
  cursor: pointer;
`;
const NavWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavLink = styled.div`
  margin: 0 24px;
  height: 100%;
  cursor: pointer;
`;
const SocialWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const SocialIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const SocialIconImg = styled.img`
  width: 32px;
`;
