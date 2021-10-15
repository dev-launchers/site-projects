import RoleCards from "./RoleCards/RoleCards";
import Section from "../Section";
import { forwardRef } from "react";

const Role = ({ data }, ref) => (
  <Section
    ref={ref}
    bgColor="#3A7CA5"
    Title="Open Roles"
    Content={<RoleCards data={data} />}
  />
);

export default forwardRef(Role);
