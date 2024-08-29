import { useParams } from "react-router-dom";

function UsersDetails() {
  const { id } = useParams<{ id: string }>();
  return <div>UsersDetails: {id}</div>;
}

export default UsersDetails;
