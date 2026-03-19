import { useEffect, useState } from "react";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
      <button>Login
    </div>
  );
}

export default App;