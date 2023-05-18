/* eslint-disable react/prop-types */

import {
  LinearSpan,
  StyledAvatarImg,
  StyledBtnFollow,
  StyledText,
  TweetItem,
} from "./Tweet.styled";

// eslint-disable-next-line react/prop-types
const Tweet = ({ user }) => {
  const onChangeFollowers = () => {};
  const btnText = user.isFollowing ? "FOLLOWING" : "FOLLOW";
  return (
    <TweetItem>
      <LinearSpan></LinearSpan>

      <StyledAvatarImg src={user.avatar} width="80px" />

      <StyledText>{user.tweets} TWEETS</StyledText>
      <StyledText>{user.followers} FOLLOWERS</StyledText>

      <StyledBtnFollow type="button" onClick={onChangeFollowers()}>
        {btnText}
      </StyledBtnFollow>
    </TweetItem>
  );
};

export default Tweet;
