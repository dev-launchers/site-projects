import axios from 'axios';
import Head from 'next/head';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Project from '../components/modules/Projects/Project';
import { env } from '../utils/EnvironmentVariables';

const data = require('../components/modules/Projects/data.json');

export const getStaticPaths = async () => {
  const { data } = await axios(
    `https://api-staging.devlaunchers.org/projects?_publicationState=live`,
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
      },
    }
  );

  const paths = [];
  data.forEach((project) => {
    paths.push({ params: { slug: [project.slug] } });
    project?.subProjects?.forEach((subproj) => {
      paths.push({ params: { slug: [project.slug, subproj.slug] } });
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps(context) {
  const { slug = [] } = context.params;
  // console.log(context.params);
  const { data: project } = await axios.get(
    `https://api-staging.devlaunchers.org/projects/${slug}`,
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
      },
    }
  );

  if (!project) {
    return {
      notFound: true,
    };
  }
  // Getting all subprojects under the parent
  // console.log(project);
  const subProjects = [];
  const subProjectsSlugs = project?.subProjects.map(
    (subProject) => subProject.slug
  );
  subProjectsSlugs.forEach(async (subProjectSlug) => {
    const { data: subProjectData } = await axios.get(
      `https://api-staging.devlaunchers.org/projects/${subProjectSlug}`,
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
        },
      }
    );
    console.log(subProjectData);
    subProjects.push(subProjectData);
  });
  console.log(subProjects.length);

  // console.log(subProjects);
  return {
    props: {
      project,
      subProjects,
    },
    revalidate: 20,
  };
}

const ProjectRoute = ({ project, subProjects }) => {
  const heroImageFormats = project?.heroImage?.formats;
  console.log(subProjects);
  const heroImage =
    heroImageFormats?.large ||
    heroImageFormats?.medium ||
    heroImageFormats?.small;
  return (
    <>
      <Head>
        <title>{project?.title}</title>
        <meta name='title' content={project?.title}></meta>
        <meta name='description' content={project?.description}></meta>

        <meta property='og:type' content='website'></meta>
        <meta
          property='og:url'
          content={`https://devlaunchers.com/projects/${project?.slug[0]}`}
        ></meta>
        <meta property='og:image' content={heroImage?.url}></meta>
        <meta property='og:title' content={project?.title}></meta>
        <meta property='og:description' content={project?.description}></meta>

        <meta property='twitter:card' content='summary_large_image'></meta>
        <meta
          property='twitter:url'
          content={`https://devlaunchers.com/projects/${project?.slug[0]}`}
        ></meta>
        <meta property='twitter:title' content={project?.title}></meta>
        <meta
          property='twitter:description'
          content={project?.description}
        ></meta>
        <meta property='twitter:image' content={heroImage?.url}></meta>
        <meta property='twitter:image:src' content={heroImage?.url}></meta>
        <meta content='#ff7f0e' data-react-helmet='true' name='theme-color' />
      </Head>
      <div>
        <Header />
        {/* <Project project={project || ''} subProjects={subProjects || ''} /> */}
        <Footer />
      </div>
    </>
  );
};
export default ProjectRoute;
