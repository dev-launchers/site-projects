/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { useUserDataContext } from "../../../../context/UserDataContext";
import AccountDropdown from "../AccountDropdown";
import HamburgerMenu from "../../HamburgerMenu";

import {
  HeaderBlock,
  LogoImageHolder,
  HeaderNav,
  Logo,
  LogoImage,
  LogoWords,
  LogoWrapper,
  NavEntry,
  // eslint-disable-next-line import/extensions
} from "../StyledHeader";

const NavbarScroller = (props: {
  logimg: { alt: string };
  MenuWords: { name: string; to: string };
  links: Array<{ name: string; to: string }>;
}) => {
  const { userData } = useUserDataContext();
  const { logimg, MenuWords, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <NavEntry key={link.name}>
        <a href={link.to}>{link.name}</a>
      </NavEntry>
    ));
  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <LogoImageHolder>
            <LogoImage>
              <Image
                // eslint-disable-next-line global-require
                // eslint-disable-next-line import/no-unresolved
                // eslint-disable-next-line global-require
                src={require("../../../../images/logo-monogram.png")}
                alt={logimg.alt}
              />
            </LogoImage>
          </LogoImageHolder>
          <LogoWords>{MenuWords.name}</LogoWords>
        </LogoWrapper>
      </Logo>
      <HeaderNav>
        <NavLinks />
      </HeaderNav>
      <div />
      <AccountDropdown userData={userData} />
      <HamburgerMenu />
    </HeaderBlock>
  );
};

export default NavbarScroller;
