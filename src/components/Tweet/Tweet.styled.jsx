import styled from "@emotion/styled";

import backPicture from "../../images/backPicture.png";
import backPicturex2 from "../../images/backPicturex2.png";

export const TweetItem = styled.li`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 380px;
  height: 460px;

  background: url(${backPicture}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: left 36px top 28px, left 0px top 0px;
  padding-top: 214px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: url(${backPicturex2}),
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }
`;

export const MinLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const LinearSpan = styled.span`
  display: inline-block;

  margin-bottom: 62px;

  width: 100%;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const StyledAvatarImg = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;

  top: 48%;
  left: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const StyledText = styled.p`
  text-align: center;

  margin-bottom: 16px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const StyledBtnFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  margin-left: auto;
  margin-right: auto;

  width: 196px;
  height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  text-transform: uppercase;

  color: #373737;

  &:hover {
    transform: scale(0.9);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
