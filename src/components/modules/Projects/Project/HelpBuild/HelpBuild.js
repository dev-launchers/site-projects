import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledHelpBuild";

const HelpBuild = ({ Color }) => (
  <Section
    bgColor="#494949"
    Title =" "
    Content={
      <Wrapper>

        <h3>Help build this project!</h3>

        <p>        
        Work together with enthusiastic developers (and more, plz someone else write this) 
        </p>
      
        <ButtonsContainer>
          <Button bgColor="#4A9D48">
            <i className="fas fa-coins"></i> Become a sponsor

          </Button>
        </ButtonsContainer>
        
        </Wrapper>
    }
  />
  
);

export default withTheme(HelpBuild);
