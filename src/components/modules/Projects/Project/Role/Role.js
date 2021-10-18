import RoleCards from "./RoleCards/RoleCards";
import Section from "../Section";

const Role = ({ data, projectName }) => (
  <Section
    bgColor="#3A7CA5"
    Title="Open Roles"
    Content={<RoleCards data={data} projectName={projectName} />}
  />
);

export default Role;
