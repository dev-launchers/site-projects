/* eslint-disable no-unused-vars */
import React from "react";
// import Link from "next/link";
// import Image from "next/image";
import { withTheme } from "styled-components";
import { useRouter } from "next/router";
import Button from "../../../common/Button";

import { Wrapper } from "./StyledProject";
// import OpenPositions from "./OpenPositions";
import Team from "./Team";
// import SignUpButton from "./SignUpButton";

import HeroSection from "./HeroSection";
import Tags from "./Tags";
import Vision from "./Vision";
import Role from "./Role/Role";
import Description from "./Description/Description";
import Milestones from "./Milestones";
import JoinSupport from "./JoinSupport";
import HelpBuild from "./HelpBuild";
import Sessions from "./Sessions";
import SubProjects from "./SubProjects/SubProjects";

const Project = ({ project,subProjects, theme }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
   const { slug = [] } = router.query;
   let isParentProject = true;
    // Getting all subprojects under the parent and filter it to match with the requested subproject
     let subProject ="";
    if(slug.length=== 2){
      const subProjectList= subProjects?.filter(subproj=> slug[1] === subproj.slug);
      subProject=subProjectList[0];
    }
    // check if its for subproject rendering
     if((subProject) && (slug.length==2)){
      isParentProject= false;
    }
    // Rendering the components based on,parent project or subproject
    if(isParentProject) {
      return (
        <Wrapper>
        <div id="background" />
        <HeroSection />
        <Tags />
        <Vision />
        <Description
          descriptionData={project.description}
          images={project.Images}
        />
          <SubProjects subprojects = {project.subProjects} projSlug={project.slug}/>
        <Role data={project.openPositions} />
        <Milestones data={project?.board?.ProjectMilestone} />
         <JoinSupport/>
        <HelpBuild/>
        <Sessions calendarId={project.calendarId} />
        <Team data={project.team} />
      </Wrapper>
         
    );
  } else {
      return (
        <Wrapper>
        <div id="background" />
        <HeroSection />
        <Tags />
        <Vision />
        <Description
          descriptionData={subProject.description}
          images={subProject.Images}
        />
         <JoinSupport/>
        <HelpBuild/>
        </Wrapper>
      );
  }
};
export default withTheme(Project);

// const Project = (props) => {
//   const projectsData = useProjectsDataContext([]);
//   const [projectData, setProjectData] = React.useState({
//     heroImage: "",
//     catchPhrase: "",
//     keywords: [],
//     projectReferenceURLs: [],
//     openPositions: [],
//     meetingTimes: [],
//     meetingLinkURLs: [],
//     team: { members: [], leaders: [] },
//   });

//   React.useEffect(() => {
//     if (!projectsData.length) return;
//     setProjectData(
//       projectsData.filter((entry) => entry.slug === props.projectId)[0]
//     );
//   }, [projectsData, props.projectId]);

//   return (
//     <Wrapper>
//       <ProjectHero projectData={projectData} />
//       <div
//         style={{
//           width: "90%",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <div
//           style={{
//             fontFamily: props.theme.fonts.headline,
//             marginTop: "4rem",
//             marginBottom: "4rem",
//             padding: "1rem",
//             fontSize: "2.5rem",
//             border: "1px solid black",
//           }}
//         >
//           {projectData?.vision}
//         </div>
//         <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
//           <h3 style={{ display: "inline" }}>Description:</h3>{" "}
//           {projectData?.description?.split("\n").map((text, i) => (
//             <p key={i}> {text} </p>
//           ))}
//         </div>
//         <CategoriesContainer>
//           <div>
//             {/* }
//             <CategoryTitle>
//               Project
//             </CategoryTitle>
//             { */}
//             <CategoryContainer>
//               <h4>Commitment Level</h4>
//               <p>{projectData?.commitmentLevel}</p>

//               <h4>Project References</h4>
//               {projectData?.projectReferenceURLs.map((element, i) => (
//                 <p key={i}>
//                   <a
//                     href={element.url}
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     {element.title}
//                   </a>
//                 </p>
//               ))}
//             </CategoryContainer>
//           </div>
//           <div>
//             {/* }
//             <CategoryTitle>Commitment/Meetings</CategoryTitle>
//             { */}
//             <CategoryContainer>
//               <h4>Meeting Times</h4>
//               {projectData?.meetingTimes.map((meeting, i) => (
//                 <p key={i}>
//                   {meeting.title} {meeting.dateTime}
//                 </p>
//               ))}
//               <h4>Meeting Links</h4>
//               {projectData?.meetingLinkURLs.map((url) => (
//                 <p key={url.id}>
//                   <a href={url.url} rel="noopener noreferrer" target="_blank">
//                     {url.roomName}
//                   </a>
//                 </p>
//               ))}
//             </CategoryContainer>
//           </div>
//         </CategoriesContainer>
//         <br />
//       </div>
//       {projectData.openPositions.length ? (
//         <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
//           <OpenPositions projectData={projectData} />
//         </div>
//       ) : (
//         ""
//       )}
//       {projectData.team.leaders.length || projectData.team.members.length ? (
//         <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
//           <Team projectData={projectData} />
//         </div>
//       ) : (
//         ""
//       )}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           padding: "2rem",
//           color: "white",
//         }}
//       ></div>
//       <div
//         style={{
//           width: "100%",
//           marginBottom: "2rem",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <SignUpButton
//           projectName={projectData?.title}
//           style={{
//             fontSize: "3rem",
//             paddingLeft: "20vw",
//             paddingRight: "20vw",
//           }}
//         >
//           JOIN NOW
//         </SignUpButton>
//       </div>
//       <div
//         style={{
//           width: "90%",
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginBottom: "2rem",
//         }}
//       >
//         <Link href="/projects" passHref>
//           <a>{"<<"} Back to Projects</a>
//         </Link>
//       </div>
//     </Wrapper>
//   );
// };

// export default withTheme(Project);