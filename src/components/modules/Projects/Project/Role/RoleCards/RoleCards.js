import { useState } from "react";
import {
  Cards,
  Wrapper,
  Title,
  Subtitle,
  Container,
  FlexBox,
} from "./StyledRoleCards";
import ReactMarkdown from "react-markdown";
import { CardButton } from "../Button/StyledButton";
import RoleModal from "../RoleModal";

const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return <ReactMarkdown>{text}</ReactMarkdown>
  return <ReactMarkdown>{text.slice(0, truncateAt) + replaceWith}</ReactMarkdown>
};
const RoleCards = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Wrapper>
      {data
        .filter(({ isHidden }) => !isHidden)
        .map((role) => (
          <Cards key={role.id}>
            <Container>
              <Title>
                <ReactMarkdown>{role.title}</ReactMarkdown>
              </Title>

              <Subtitle style={{ padding: ".5rem 0" }}>
                {truncateText(role.description, 255, "...")}
              </Subtitle>
              <FlexBox>
                <CardButton>Apply Now</CardButton>
                <CardButton
                  onClick={() => {
                    openModal();
                    setSelectedRole(role);
                  }}
                  fontColor
                  bgColor
                  border
                >
                  Read More
                </CardButton>
              </FlexBox>
              <RoleModal
                onRequestClose={closeModal}
                isOpen={modalIsOpen}
                role={selectedRole}
              />
            </Container>
          </Cards>
        ))}
    </Wrapper>
  );
};

export default RoleCards;
