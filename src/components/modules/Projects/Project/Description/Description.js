import Section from "../Section";
import DescriptionContent from "./DescriptionContent/DescriptionContent";

const Description = ({ descriptionData, images,subprojects,projectSlug }) => (
  <Section
    bgColor="#3C3B3C"
    Title="Description"
    Content={
      <DescriptionContent descriptionData={descriptionData} images={images} subprojects={subprojects} projectSlug={projectSlug}/>
    }
    contentStyle={{ paddingBottom: 0 }}
  />
);

export default Description;
