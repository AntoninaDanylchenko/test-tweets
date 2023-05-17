/* eslint-disable react/prop-types */

import { TweetItem } from "./Tweet.styled";

// eslint-disable-next-line react/prop-types
const Tweet = ({ user }) => {
  return (
    <TweetItem>
      <img src={user.avatar} />

      <p>{user.tweets} TWEETS</p>
      <p>{user.followers} FOLLOWERS</p>

      <button type="button">FOLLOW</button>
    </TweetItem>
  );
};

export default Tweet;
