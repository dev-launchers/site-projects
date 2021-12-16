/* eslint-disable import/extensions */
import NavbarScroller from "./NavbarScroller";

const navigation = {
  logimg: { alt: "Dev Launchers Logo" },
  MenuWords: { name: "Dev Launchers", to: "/" },
  links: [
    { name: "CREATE", to: "../create" },
    { name: "LEARN", to: "../learn" },
    { name: "SUPPORT US", to: "../support-us" },
    { name: "JOIN", to: "../join" },
  ],
};

export default function Header() {
  const { logimg, MenuWords, links } = navigation;

  return (
    <>
      <NavbarScroller logimg={logimg} MenuWords={MenuWords} links={links} />
    </>
  );
}
