import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { TaskGroup, Title,Description } from "./StyledMilestones";
// Added for cyclic functionality between milestones
import MilestoneSlider from "./MilestoneSlider";

const Milestones = ({ data }) => (
    <Section
      bgColor="#E5E5E5"
      txtColor
      Title="Milestones"
      Content={data?.map((milestone, i) => (
        <TaskGroup key={i}>
          <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>
            {milestone.title}
            <Description>{milestone.description}</Description>
          </Title>
          {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
          {/* Added for cyclic functionality between milestones */}
          <div>
            <MilestoneSlider
            tasks={milestone.task}
            slidesToShow ={3}
            isCyclic={true}
            isAutoplay ={true}
            />
          </div>
          {/* </div> */}
          </div>
        </TaskGroup>
      ))}
    />
  );

export default withTheme(Milestones);