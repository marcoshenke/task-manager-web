import { useState } from "react";

import "./App.css";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};

export default App;
