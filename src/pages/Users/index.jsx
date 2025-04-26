import { Link } from "react-router-dom";

import config from "@/config";
import { useGetAllUsersQuery } from "@/services/user";

function Users() {
  const users = useGetAllUsersQuery();

  return (
    <div>
      <h1>Users page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${config.routes.users}/${user.username}`}>
              {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
