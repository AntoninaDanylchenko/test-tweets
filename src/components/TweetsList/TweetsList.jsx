import Tweet from "../../components/Tweet/Tweet";
import PropTypes from "prop-types";
import { StyledTweetsList } from "./TweetsList.styled";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const TweetsList = ({ users, page }) => {
  const [paginUser, setPaginUser] = useState([]);
  useEffect(() => {
    const threeUsers = users.slice((page - 1) * 3, page * 3);
    setPaginUser((prev) => [...prev, ...threeUsers]);
  }, [page, users]);
  return (
    <StyledTweetsList>
      {paginUser.length > 0 &&
        paginUser.map((user) => <Tweet key={user.id} user={user} />)}
    </StyledTweetsList>
  );
};

export default TweetsList;

TweetsList.propTypes = {
  users: PropTypes.array.isRequired,
};
