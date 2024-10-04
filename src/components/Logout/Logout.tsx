import { LogoutType } from "./logout.types";

const Logout = ({ setCurrUser }: LogoutType) => {
  console.log(setCurrUser);
  return <h1>logout</h1>;
};

export default Logout;
