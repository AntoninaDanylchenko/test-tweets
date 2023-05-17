import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #ebd8ff;
  font-weight: 500;

  &.active {
    color: #471ca9;
    background-color: #ebd8ff;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: #ffffff;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
`;
