import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const HomeText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 1.17;
  color: #471ca9;

  text-align: center;
  margin-bottom: 20px;
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;

  margin-bottom: 20px;

  width: 196px;
  height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: 1px solid #471ca9;
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  text-transform: uppercase;

  background: #ebd8ff;
  color: #373737;

  &:hover {
    background: #5cd3a8;
    color: #ffffff;
  }
`;
