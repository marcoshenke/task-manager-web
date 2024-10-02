import { useState } from "react";

import { Signup } from "components";
import Login from "./Login";
import Logout from "./Logout";

import { UserType } from "./user.types";

const User = ({ currUser, setCurrUser }: UserType) => {
  const [show, setShow] = useState(true);

  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        {/* <PrivateText currUser={currUser} /> */}
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};
export default User;
