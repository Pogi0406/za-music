import styled from "styled-components";

export const StyledButton = styled.button`
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

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
