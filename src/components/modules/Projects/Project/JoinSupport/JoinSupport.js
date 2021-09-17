import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledJoinSupport";

const JoinSupport = ({ Color, theme }) => (
  <Section
    bgColor="#3A7CA5"
    Title =""
    Content={
      <Wrapper>
        <h3>Join and support this project!</h3>
        <p>
        Work together with enthusiastic developers (and more, plz someone else write this)
        </p>

       
        <ButtonsContainer>
          <Button>
            <i className="fas fa-info"></i> Join Now
          </Button>
          <Button bgColor={theme.colors.ACCENT_2}>
            <i className="fas fa-coins"></i> Donate
          </Button>
        </ButtonsContainer>
        
        </Wrapper>
    }
  />
  
);

export default withTheme(JoinSupport);
