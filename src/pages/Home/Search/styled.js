import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SectionSubtitle } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.md} {
    padding-top: 28px;
    gap: 25px;
  }

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
`;

export const InputWrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  ${device.lg} {
    width: 100%;
  }
`;

export const TableTitle = styled(SectionSubtitle)`
  margin-bottom: 30px;

  ${device.md} {
    margin-bottom: 15px;
  }
`;

export const NotFoundText = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;
