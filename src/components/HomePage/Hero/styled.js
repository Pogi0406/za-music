import styled from "styled-components";
import { Text } from "components/ui/Typography";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
  margin: 24px 0 35px;
`;

export const TextWrapper = styled.div`
  padding-left: 123px;
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px 35px;
  margin-top: 52px;
  box-shadow:
    7px 23px 9px rgba(7, 21, 44, 0.02),
    4px 13px 8px rgba(7, 21, 44, 0.05),
    2px 6px 6px rgba(7, 21, 44, 0.09),
    0px 1px 3px rgba(7, 21, 44, 0.11),
    0px 0px 0px rgba(7, 21, 44, 0.11);
  border-radius: 20px;
  display: flex;
  gap: 14px;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
