import { useState } from "react";
import useUsersApi from "../../api/useApi";
import { getAllUsers } from "../../api/usersApi";
import Loader from "../../components/Loader/Loader";
import LoadMore from "../../components/LoadMore/LoadMore";
import TweetsList from "../../components/TweetsList/TweetsList";
import { HomeLink } from "../Home/Home.styled";

const Tweets = () => {
  const usersArr = useUsersApi(getAllUsers);
  const [page, setPage] = useState(1);

  const { result, isLoading } = usersArr;

  const loadMore = (event) => {
    event.preventDefault();
    setPage((pr) => pr + 1);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HomeLink to="/">Go back</HomeLink>
          <TweetsList users={result} page={page} />
          <LoadMore onClick={loadMore} />
        </>
      )}
    </>
  );
};

export default Tweets;
