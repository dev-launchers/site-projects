import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Fuse from "fuse.js";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";
import SearchBar from "./Project/SearchBar";

const Projects = ({ projects }) => {
  const [searchValue, setSearchValue] = useState("");
  // Set the state variables for lazy loading
  const [pageNumber, setPageNumber] = useState(1);
  const [projsPerPage] = useState(6);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [lastProjElement, setLastProjElement] = useState(null);

  // Added for Project lazy loading
  // const endPageNumber = Math.ceil(projects?.length / projsPerPage);
  const indexOfLastProj = pageNumber * projsPerPage;
  const indexOfFirstProj = indexOfLastProj - projsPerPage;
  const slicedProjects = projects?.slice(indexOfFirstProj, indexOfLastProj);

  // set the current projects to be rendered
  useEffect(() => {
    if (
      // pageNumber <= endPageNumber &&
      projects?.length !== currentProjects.length
    ) {
      setCurrentProjects((prevProjs) => [...prevProjs, ...slicedProjects]);
    }
  }, [pageNumber]);

  // creating an intersection observer
  const observer = useRef();
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      },
      { threshold: 0.5 }
    );
  }, []);

  // observe the last project card element rendered
  useEffect(() => {
    const currentElement = lastProjElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      // to unobserve the previous last-project card
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastProjElement]);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // for project search functionality
  const options = {
    includeScore: true,
    keys: ["keywords.keyword"],
    threshold: 0.3,
    ignoreFieldNorm: true,
  };
  const fuse = new Fuse(projects, options);
  const searchResult = fuse.search(searchValue).map(({ item }) => item);
  const searchProject = (searchQuery) => {
    setSearchValue(searchQuery);
  };

  const items = searchValue ? searchResult : currentProjects;

  return (
    <div
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Projects you can join!</h1>
        <SearchBar onChange={searchProject} />
      </div>

      <div>
        Create, discover, and join open-source software projects! We help
        members to contribute meaningfully and gain industry-ready experience
        along the way. Build epic products, tools, and games used by real people
        while learning valuable skills and meeting awesome people!
      </div>
      <Layout>
        {items.map((project, i) => {
          // to have reference to the last project card rendered
          if (items.length === i + 1 && projects?.length !== items.length) {
            return (
              <ProjectContainer key={i} ref={setLastProjElement}>
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
                        <Link href={`${router.asPath}${project.slug}`} passHref>
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
            );
          }
          return (
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
                      <Link href={`${router.asPath}${project.slug}`} passHref>
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
          );
        })}
      </Layout>
    </div>
  );
};
export default Projects;
