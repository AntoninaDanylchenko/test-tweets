/* eslint-disable react/prop-types */
import { useState } from "react";
import { patchUserById } from "../../api/usersApi";
import {
  LinearSpan,
  StyledAvatarImg,
  StyledBtnFollow,
  StyledText,
  TweetItem,
} from "./Tweet.styled";
import wrapper from "../../helpers/wrapper";

// eslint-disable-next-line react/prop-types
const Tweet = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const [followers, setFollowers] = useState(user.followers);

  const handleChangeFollowers = () => {
    const newIsFollowing = !isFollowing;
    const newFollowers = isFollowing ? followers - 1 : followers + 1;
    setIsFollowing(newIsFollowing);
    setFollowers(newFollowers);
    const changedUser = {
      ...user,
      isFollowing: newIsFollowing,
      followers: newFollowers,
    };
    wrapper(patchUserById, user.id, changedUser);
  };

  const getBgColor = (variant) => {
    return variant ? "#5CD3A8" : "#EBD8FF";
  };

  const btnText = isFollowing ? "FOLLOWING" : "FOLLOW";
  return (
    <TweetItem>
      <LinearSpan></LinearSpan>

      <StyledAvatarImg src={user.avatar} width="80px" alt={user.userName} />
      <StyledText>{user.tweets} TWEETS</StyledText>
      <StyledText>{followers} FOLLOWERS</StyledText>

      <StyledBtnFollow
        type="button"
        onClick={handleChangeFollowers}
        style={{ backgroundColor: getBgColor(isFollowing) }}
      >
        {btnText}
      </StyledBtnFollow>
    </TweetItem>
  );
};

export default Tweet;
