import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #c3a7e1;
  font-weight: 500;

  &.active {
    color: #5cd3a8;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: #5cd3a8;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
`;
