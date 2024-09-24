import styled from "styled-components";
import IconButton from "components/ui/IconButton";
import { SubText, Text } from "components/ui/Typography";

export const TableData = styled.td`
  padding: 10px 20px 15px 0;
`;

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    .text {
      display: none;
    }
    .icon {
      display: block;
    }
    background-color: ${({ theme }) => theme.colors.lightWhite};
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px 15px 0;
`;

export const TrackInfoImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TrackSubText = styled(SubText)`
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SongNumberText = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const IconWrapper = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  display: none;
`;
