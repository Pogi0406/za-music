import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  padding: 0 120px;
  width: 100%;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.items || "flex-start"};
  justify-content: ${(props) => props.content || "start"};
`;
