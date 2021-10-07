import React from 'react'
import Section from "../Section";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../../../common/Card";
import { Layout, ProjectContainer } from "./StyledSubProjects";

const SubProjects = ({subprojects,projectSlug}) => {
  // console.log("In Subprojects")
  // console.log(subprojects)
  // console.log(projectSlug)
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
  if (!Array.isArray(subprojects) || subprojects.length <= 0) {
    return null;
  }
  
  return (
    <Layout>
          {subprojects.map((subproject, i) => ( 
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
                href: subproject.slug,
               imageSrc: subproject.heroImage.url,
              actions: (
                  <>
                    <Link href={`${subproject.slug}` || ""} passHref>
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
  )
}

export default SubProjects
