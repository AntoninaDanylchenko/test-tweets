import NavBar from "./NavBar";
import { FlexContainer, HeaderStyled, Logo } from "./Header.styled";
import { Container } from "../Styles.styled";
import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <FlexContainer>
          <a href="http://localhost:5173/test-tweets/home">
            <Logo src={logo} alt="Logo Go It" width="96px" />
          </a>
          <NavBar />
        </FlexContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
