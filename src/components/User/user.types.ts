import { UserInfoType } from "types/user.types";

export type UserType = {
  currUser: UserInfoType;
  setCurrUser: (dataUser: UserInfoType) => void;
};
