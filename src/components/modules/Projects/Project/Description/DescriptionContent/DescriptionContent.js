import {
  Paragrapgh,
  GridSection,
  ImageHolder,
  Conatiner,
  Strip,
} from "./StyledDescriptionContent";

const DescriptionContent = ({ data }) => {
  const { description, images } = data;
  return (<>
    <Paragrapgh style={{ marginBottom: "1.5625rem" }}>{description}</Paragrapgh>
    <Strip>
      <Conatiner>
        <GridSection>
          {images.map((image) => (
            <ImageHolder src={image.image[0].url}/>
          ))}
        </GridSection>
      </Conatiner>
    </Strip>
  </>)
};

export default DescriptionContent;
