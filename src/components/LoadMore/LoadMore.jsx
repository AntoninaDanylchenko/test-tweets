import PropTypes from "prop-types";
import { LoadMoreBtn } from "./LoadMore.styled";

// eslint-disable-next-line react/prop-types
const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};

LoadMore.prototype = {
  onClick: PropTypes.func,
};

export default LoadMore;
