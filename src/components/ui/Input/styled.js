import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightWhite};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  line-height: 27px;
  border-radius: 25px;
  padding: 17px 54px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-image: ${(props) => `url(${props.startIcon})`};
  background-repeat: no-repeat;
  background-position: 17px 21px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;
