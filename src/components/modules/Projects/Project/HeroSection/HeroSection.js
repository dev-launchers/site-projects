import React from "react";
import { withTheme } from "styled-components";
// import Link from "next/link";

import Image from "next/image";
// import Button from "../../../../common/Button";
// import Tag from "../../../../common/Tag";
// import SignUpButton from "../SignUpButton";
import { Wrapper } from "./StyledHeroSection";

// import { env } from "../../../../../utils/EnvironmentVariables";

const HeroSection = ({ projectName, projectCatchPhrase, heroImage }) => (
  <Wrapper>
    <h2>{projectName}</h2>
    <span>{projectCatchPhrase}</span>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        marginTop: "2rem",
      }}
    >
      <Image
        src={heroImage.url}
        layout="fill"
        alt="project's image"
        objectFit="cover"
      />
    </div>
  </Wrapper>
);

export default withTheme(HeroSection);
