import Login from "./Login";
import Private from "./Private";
import { useState } from "react";

function App() {
  const [loggendInUser, setLoggedInUser] = useState(null);

  const login = (username) => {
    setLoggedInUser(username);
  };
  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggendInUser === null ? <Login login={login} /> : <Private username={loggendInUser} logout={logout}/>}
    </div>
  );
}

export default App;
