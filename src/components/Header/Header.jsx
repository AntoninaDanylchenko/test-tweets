import NavBar from "./NavBar";
import { FlexContainer, HeaderStyled } from "./Header.styled";
import { Container } from "../Styles.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <FlexContainer>
          <a href="http://localhost:5173/test-tweets/home">Logo</a>
          <NavBar />
        </FlexContainer>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
