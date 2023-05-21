import styled from "@emotion/styled";

export const StyledTweetsList = styled.ul`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));

  column-gap: calc((100% - 3 * 380px) / 2);
  row-gap: 50px;
`;
