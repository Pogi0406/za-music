import {
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_PLAYER_HEIGHT,
  PLAYER_HEIGHT,
} from "common/constants";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${PLAYER_HEIGHT}px);

  ${device.lg} {
    height: calc(100vh - ${MOBILE_HEADER_HEIGHT}px - ${MOBILE_PLAYER_HEIGHT}px);
  }
`;
