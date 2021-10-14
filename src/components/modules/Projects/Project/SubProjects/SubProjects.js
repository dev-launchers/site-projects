import React from 'react'
import Section from "../Section";
import Link from "next/link";
import Card from "../../../../common/Card";
import { Layout, ProjectContainer } from "./StyledSubProjects";

const SubProjects = ({subprojects,projSlug}) => {
 
  if (!Array.isArray(subprojects) || subprojects.length <= 0) {
    return null;
  }

  return (
    <Section
    bgColor="#3C3B3C"
    Title="Subprojects"
    Content={
    <Layout>
          {subprojects?.map((subproject, i) => ( 
          <ProjectContainer key = {i}>
          <Card
              isLinkingInside
               style={{ margin: 0, width: "100%", height: "100%" }}
                             cardData={{
                 id: subproject.id,
                title: subproject.title,
                secondaryText: `Commitment level: ${subproject.commitmentLevel}`,
               tags: subproject.keywords.map(({ keyword }) => keyword),
                description: subproject.catchPhrase,
                href: projSlug+"/"+subproject.slug,
               imageSrc: subproject.heroImage.url,
              actions: (
                  <>
                    <Link href={`/projects/${projSlug}/${subproject.slug}` || ""} passHref>
                      <a>LEARN MORE</a>
                    </Link>
                    <Link href="support-us" passHref>
                      <a>DONATE</a>
                    </Link>
                  </>
                ),
              }}
            />
          </ProjectContainer>
         ))} 
    </Layout>
    }
    />
  )
}

export default SubProjects