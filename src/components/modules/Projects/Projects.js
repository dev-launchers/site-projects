import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";
import SearchBar from "./Project/SearchBar";
import Fuse from "fuse.js";

const Projects = ({ projects }) => {
  const [searchResult, setSearchResult] = useState(projects);

  const options = {
    includeScore: true,
    keys: ["keywords.keyword"],
    threshold: 0.3
  };

  const fuse = new Fuse(projects, options);

  const searchProject = (searchQuery) => {
    const result = fuse.search(searchQuery).map(({ item }) => item);
    setSearchResult(result);
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const items = searchResult.length ? searchResult : projects

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
        {items.map((project, i) => (
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
    </div>
  );
};
export default Projects;
