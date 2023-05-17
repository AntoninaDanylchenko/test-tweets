import useUsersApi from "../../api/useApi";
import { getAllUsers } from "../../api/usersApi";
import Loader from "../../components/Loader/Loader";
import TweetsList from "../../components/TweetsList/TweetsList";

const Tweets = () => {
  const usersArr = useUsersApi(getAllUsers);

  const { users, isLoading } = usersArr;

  return <>{isLoading ? <Loader /> : <TweetsList users={users} />}</>;
};

export default Tweets;
