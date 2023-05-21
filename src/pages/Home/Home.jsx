import birds from "../../images/twitter-following-11549930729dsqpy9b70a.png";
import { HomeSection, HomeText, HomeLink } from "./Home.styled";

const Home = () => {
  const text = "Let`s go!";
  return (
    <>
      <HomeSection>
        <div>
          <HomeText>Ready to start? </HomeText>
          <HomeLink to="/tweets"> {text} </HomeLink>
        </div>
        <img src={birds} width="400" alt="follow bird" />
      </HomeSection>
    </>
  );
};

export default Home;
