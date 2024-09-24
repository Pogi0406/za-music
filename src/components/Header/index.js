import { Logo, Search } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import React from "react";
import { LogoWrapper, Wrapper } from "./styled";
import IconButton from "components/ui/IconButton";
import { ContentWrapper } from "components/Layout";

function Header() {
  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <LogoWrapper>
          <Logo></Logo>
          <SectionSubtitle>Za Music</SectionSubtitle>
        </LogoWrapper>
        <IconButton>
          <Search></Search>
        </IconButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
