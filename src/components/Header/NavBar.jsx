import { NavLinkStyled, StyledNavList } from "./NavBar.styled";

const NavBar = () => {
  return (
    <nav>
      <StyledNavList>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default NavBar;
