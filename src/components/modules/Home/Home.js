import React from "react";

import PageBody from "../../../components/common/PageBody";
import CardGroup from "../../../components/common/CardGroup";
import RainbowBar from "../../../components/common/RainbowBar";
import SignUpForm from "../../../components/common/SignUpForm";

import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import Intro from "./Intro";
//import Programs from "./Programs";
import Organization from "./Organization";
import Contribution from "./Contribution";
import Partners from "./Partners";

import communityCards from "./communityCards.js";
import educationalCards from "./educationalCards.js";
import organizationCards from "./organizationCards.js";
import {
  HomePageBody,
  ColoredCtaWrapper,
  ColoredCtaEntry,
  ColoredCtaEntryImage,
  ColoredCtaEntryTitle
} from "./StyledHome";
import CtaDescriptionArea from "./CtaDescriptionArea";

import theme from "../../../styles/theme.js";

import womanComputerImage from "../../../images/people-cutouts/woman-computer.png";
import manGlassesImage from "../../../images/people-cutouts/man-glasses.png";
import girlSmilingImage from "../../../images/people-cutouts/girl-smiling.png";
import boyFrontImage from "../../../images/people-cutouts/boy-front.png";

export default function Home() {
  console.log(communityCards);
  return (
    <div>
      <RainbowBar />
      <HeroImage />
      <HeroOverlay />
      <PageBody>
        <HomePageBody>
          <ColoredCtaWrapper>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_1}>
              <ColoredCtaEntryTitle>LEARN</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={womanComputerImage} />
            </ColoredCtaEntry>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_2}>
              <ColoredCtaEntryTitle>LEAD</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={manGlassesImage} />
            </ColoredCtaEntry>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_4}>
              <ColoredCtaEntryTitle>CREATE</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={girlSmilingImage} />
            </ColoredCtaEntry>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_3}>
              <ColoredCtaEntryTitle>DONATE</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={boyFrontImage} />
            </ColoredCtaEntry>
          </ColoredCtaWrapper>
          <Intro />
          <SignUpForm />

          <CtaDescriptionArea
            flexDirection="row"
            title="LEARN"
            descriptionHeadline="Get trained to become a developer from the ground up while working on real projects!"
            descriptionContent="Some content about learning. Some content about learning. Some content about learning. Some content about learning. Some content about learning. "
            titleUnderlineColor={theme.colors.ACCENT_1}
            imageSrc={womanComputerImage}
            imageOutlineColor={theme.colors.NEUTRAL_1}
          />
          <CtaDescriptionArea
            flexDirection="row-reverse"
            title="LEAD"
            descriptionHeadline="Evolve your career in the direction you want to go"
            descriptionContent="Some content about leading. Some content about leading. Some content about leading. Some content about leading. Some content about leading. "
            titleUnderlineColor={theme.colors.ACCENT_2}
            imageSrc={manGlassesImage}
            imageOutlineColor={theme.colors.NEUTRAL_1}
          />
          <CtaDescriptionArea
            flexDirection="row"
            title="CREATE"
            descriptionHeadline="This is a headline about creating!"
            descriptionContent="Some content about creating. Some content about creating. Some content about creating. Some content about creating. Some content about creating. "
            titleUnderlineColor={theme.colors.ACCENT_4}
            imageSrc={girlSmilingImage}
            imageOutlineColor={theme.colors.NEUTRAL_1}
          />
          <CtaDescriptionArea
            flexDirection="row-reverse"
            title="DONATE"
            descriptionHeadline="Your donation will create an opportunity for a young learner, preparing them to face the technical challenges of the future head on."
            descriptionContent="Dev Launchers is a registered 501c3 not-for-profit organization. We can’t keep changing lives without your support!"
            titleUnderlineColor={theme.colors.ACCENT_1}
            imageSrc={boyFrontImage}
            imageOutlineColor={theme.colors.NEUTRAL_2}
            mainBackgroundColor={theme.colors.NEUTRAL_1}
            titleFontColor={theme.colors.NEUTRAL_2}
            descriptionBackgroundColor={theme.colors.NEUTRAL_1}
            descriptionFontColor={theme.colors.NEUTRAL_2}
          />

          {/*}
          <CardGroup
            cards={communityCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          <CardGroup
            size="large"
            cards={organizationCards}
            titleAlignment="center"
            cardGroupFlexDirection="center"
          />
          <hr />
          {*/}
          {/*}
          <Programs />
          <hr />
          {*/}
          {/*<Organization />*/}
          {/*}
          <CardGroup
            cards={educationalCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          {*/}
          <Contribution />
          <Partners />
        </HomePageBody>
      </PageBody>
    </div>
  );
}
