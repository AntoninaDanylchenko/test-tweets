import NavBar from "./NavBar";
import { HeaderStyled } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <a href="http://localhost:5173/test-tweets/home">Logo</a>
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
