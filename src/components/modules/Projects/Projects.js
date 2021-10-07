import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";
//Added for pagination
import { useState } from "react";
import Pagination from "./Pagination";

const Projects = ({ projects }) => {
 
  // projects.filter(project => project.subProjects.length>0).map(project=>(project.subProjects.map(subProj=>(console.log("subProj="+project.slug)))))
  // Set current page and projects per page value
  const [currentPage, setCurrentPage] = useState(1);
  const [projsPerPage] = useState(6);
    const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // Added for Project pagination
  const indexOfLastProj = currentPage * projsPerPage;
  const indexOfFirstProj = indexOfLastProj - projsPerPage;
  const currentProjects = projects.slice(indexOfFirstProj, indexOfLastProj);
  const navigatePage = (pageNumber) => setCurrentPage(pageNumber)
  const prevPage = (pageNumbers) => {
    if (pageNumbers.includes(currentPage - 1)) {
      setCurrentPage(currentPage - 1);
          }
  };
  const nextPage = (pageNumbers) => {
    if (pageNumbers.includes(currentPage + 1)) {
      setCurrentPage(currentPage + 1);
          }
  };
  return (
    <div id='pagination'
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
      }}
    >
      <h1>Projects you can join!</h1>
      <div>
        Create, discover, and join open-source software projects! We help
        members to contribute meaningfully and gain industry-ready experience
        along the way. Build epic products, tools, and games used by real people
        while learning valuable skills and meeting awesome people!
      </div>
      <Layout>
          {currentProjects.map((project, i) => (
          <ProjectContainer key={i}>
            <Card
              isLinkingInside
              style={{ margin: 0, width: "100%", height: "100%" }}
              cardData={{
                id: project.id,
                title: project.title,
                secondaryText: `Commitment level: ${project.commitmentLevel}`,
                tags: project.keywords.map(({ keyword }) => keyword),
                description: project.catchPhrase,
                href: project.slug,
                imageSrc: project.heroImage.url,
                actions: (
                  <>
                    <Link href={`projects/${project.slug}` || ""} passHref>
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
      <Pagination 
        itemsPerPage={projsPerPage}
        totalNoOfItems={projects.length}
        navigatePage={navigatePage}
        prevPage={prevPage}
        activePage={currentPage}
        nextPage={nextPage}
        />
      </div>
  );
};
export default Projects;
