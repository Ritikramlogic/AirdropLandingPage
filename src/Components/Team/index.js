import React, { Component } from "react";
import styled from "styled-components";
export default class Team extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <TeamWrapper>
              <TeamMember src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <TeamMember src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <TeamMember src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <TeamMember src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <TeamMember src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <TeamMember src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </TeamWrapper>
            <ContentWrapper>
              <Logo src={process.env.PUBLIC_URL + "assets/img/Team.svg"} />
              <Content>
                Let's say you want to create a simple and reusable component
                that you can use throughout your application. There should be a
                normal version and a big and primary version for the important
                buttons. This is what it should look like when rendered: (this
                is a live example, click on them!)
              </Content>
            </ContentWrapper>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: black;
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 72px;
  justify-content: center;
  text-align: left;
`;
const Logo = styled.img`
  width: 700px;
  margin: 2rem 0;
`;
const TeamWrapper = styled.div`
  width: 510px;
  display: flex;
  flex-wrap: wrap;
`;
const ContentWrapper = styled.div`
  flex: 0.8;
  margin-left: 3rem;
`;
const Content = styled.div`
  line-height: 1.8;
  width: 600px;
`;
const TeamMember = styled.img`
  width: 150px;
  margin: 10px;
`;
