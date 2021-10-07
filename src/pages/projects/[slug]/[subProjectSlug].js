import axios from "axios";
import Head from "next/head";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import SubProject from "../../../components/modules/Projects/Project/SubProjects/SubProject";
import { env } from "../../../utils/EnvironmentVariables";
import { useRouter } from "next/router";
 

export const getStaticPaths = async () => {
  const { data } = await axios(`${env().STRAPI_URL}/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });
  const paths = data.filter(project => project.subProjects.length>0).map(project=>(project.subProjects.map(subProj=>({
      params: { slug : project.slug , subProjectSlug : subProj.slug},
    //  params: {subProjectSlug : [project.slug , subProj.slug]},
    }))));

   console.log("paths=" +paths)
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const { slug ,subProjectSlug} = context.params;
  const { data: subProjects } = await axios.get(
    `${env().STRAPI_URL}/projects/${slug}/${subProjectSlug}`,

    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
      },
    }
  );

  if (!subProjects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      subProjects,
    },
    revalidate: 20,
  };
}

function subProjectRoute(){
    const router = useRouter();
    
  // const heroImageFormats = project?.heroImage?.formats;
  // const heroImage =
  //   heroImageFormats.large || heroImageFormats.medium || heroImageFormats.small;
  return(
    <>
    {/* <Head>
    <div>In subProject slug</div>
      </Head> */}

      
      {/* <div>
        <Header /> */}
        <div>In subProject slug</div>
        <SubProject/>
        {/* <Footer />
      </div> */}
    </>
  );
  

}
export default subProjectRoute;


