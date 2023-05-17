import Tweet from "../../components/Tweet/Tweet";
import PropTypes from "prop-types";
import { StyledTweetsList } from "./TweetsList.styled";

// eslint-disable-next-line react/prop-types
const TweetsList = ({ users }) => {
  return (
    <StyledTweetsList>
      {users.map((user) => (
        <Tweet key={user.id} user={user} />
      ))}
    </StyledTweetsList>
  );
};

export default TweetsList;

TweetsList.propTypes = {
  users: PropTypes.array.isRequired,
};
