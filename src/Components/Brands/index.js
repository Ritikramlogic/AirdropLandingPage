import React, { Component } from "react";
import styled from "styled-components";
export default class Brand extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Logo src={process.env.PUBLIC_URL + "assets/img/Trust.svg"} />
            <div>
              <BrandWrapper>
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
              </BrandWrapper>
              <BrandWrapper>
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
              </BrandWrapper>
            </div>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: #000;
`;
const Container = styled.div``;
const Logo = styled.img`
  width: 700px;
  margin: 2rem 0;
`;
const BrandWrapper = styled.div`
  padding: 3rem 0;
`;
const BrandImage = styled.img`
  width: 150px;
  margin: 0 1rem;
  opacity: 0.5;
`;
