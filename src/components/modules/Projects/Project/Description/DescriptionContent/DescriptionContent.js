import {
  Paragrapgh,
  FlexSection,
  ImageHolder,
  Conatiner,
  Strip,
} from "./StyledDescriptionContent";

import ReactMarkdown from 'react-markdown';


const DescriptionContent = ({ data }) => {
  const { description, images } = data;
  return (<>
    <Paragrapgh style={{ marginBottom: "1.5625rem" }}> <ReactMarkdown children={description}/> </Paragrapgh>
    <Strip>
      <Conatiner>
        <FlexSection>
          {images.map((image) => (
            <ImageHolder key={image.image[0].id} src={image.image[0].url}/>
          ))}
        </FlexSection>
      </Conatiner>
    </Strip>
  </>)
};

export default DescriptionContent;
