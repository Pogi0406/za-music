import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
  ${device.md} {
    padding-top: 28px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${device.md} {
    gap: 5px;
  }
`;

export const SongsCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const ArtistImageLoaderWrapper = styled.div`
  display: flex;
`;

export const ArtistInfoWrapper = styled.div`
  display: flex;
  gap: 50px;

  ${device.md} {
    gap: 15px;
    flex-direction: column;
  }
`;

export const ArtistImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 25px;
  object-fit: cover;

  ${device.md} {
    width: 100%;
    height: 176px;
  }
`;
