import { Dispatch, SetStateAction } from "react";

export type SignUpType = {
  setCurrUser: Dispatch<SetStateAction<null>>;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export type UserInfoType = {
  email: string;
  password: string;
};
