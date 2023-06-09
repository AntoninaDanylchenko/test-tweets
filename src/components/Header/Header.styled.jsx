import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Logo = styled.img`
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(1.15);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
