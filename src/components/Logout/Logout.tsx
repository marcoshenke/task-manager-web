import { Dispatch, MouseEvent, SetStateAction } from "react";
import { LogoutType } from "./logout.types";
import { UserInfoType } from "types/user.types";

const Logout = ({ setCurrUser }: LogoutType) => {
  const logout = async (
    setCurrUser: Dispatch<SetStateAction<UserInfoType | null>>
  ) => {
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "delete",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token") || "",
        },
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.removeItem("token");
      setCurrUser(null);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    logout(setCurrUser);
  };
  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  );
};

export default Logout;
