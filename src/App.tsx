import { useState } from "react";

import "./App.css";
import { User } from "components";
import { UserInfoType } from "types/user.types";

const App = () => {
  const [currUser, setCurrUser] = useState<UserInfoType | null>(null);
  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};

export default App;
