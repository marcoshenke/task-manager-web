import { Dispatch, SetStateAction } from "react";

export type SignUpType = {
  setCurrUser: Dispatch<SetStateAction<null | UserInfoType>>;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export type UserInfoType = {
  user: {email: string;
  password: string;
  name?: string
}};
