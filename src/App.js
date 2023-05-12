import { useState } from "react";
import React from "react";
import Users from "./Users";
import UsersDetails from "./UsersDetails";

const App = () => {
  const [userId, setUserId] = useState();
  return (
    <div>
      <div
        style={{ padding: 20, width: "30%", borderRight: "2px solid white" }}
      >
        <Users setUserId={setUserId} />
      </div>
      <div style={{ padding: 20, width: "70%" }}>
        <UsersDetails userId={Users} />
      </div>
    </div>
  );
};

export default App;
