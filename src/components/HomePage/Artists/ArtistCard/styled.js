import styled from "styled-components";
import { Text } from "components/ui/Typography";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;
`;
