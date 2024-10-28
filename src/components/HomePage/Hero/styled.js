import styled from "styled-components";
import { MainTitle, Text } from "components/ui/Typography";
import Button from "components/ui/Button";
import { device } from "styles/BreakPoints";

const HERO_IMAGE_HIDDEN_BREAKPOINT = 1050;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
  margin: 24px 0 35px;

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    align-items: center;
    height: 305px;
    text-align: center;
    margin: 30px 0 35px;
  }
`;

export const TextWrapper = styled.div`
  padding-left: 123px;

  ${device.xl} {
    padding-left: 70px;
  }
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    width: 100%;
    padding: 0;
  }
`;

export const HeroTitleText = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;

export const PlayButton = styled(Button)`
  display: flex;
  gap: 14px;
  align-items: center;

  @media (max-width: 1050px) {
    margin: 30px auto;
  }
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    display: none;
  }
`;
