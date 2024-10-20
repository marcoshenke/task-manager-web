import { Dispatch, SetStateAction } from "react";
import { UserInfoType } from "types/user.types";

export type UserType = {
  currUser: UserInfoType | null;
  setCurrUser: Dispatch<SetStateAction< UserInfoType | null>>;
};
