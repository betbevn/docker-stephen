import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Users() {
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
  }, [dispatch]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error occurs: {error}</div>;
  }

  return (
    <div>
      <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.username}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
