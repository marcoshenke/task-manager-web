export type SignUpType = {
  setCurrUser: (dataUser: UserInfoType) => void;
  setShow: (arg: boolean) => void;
};

export type UserInfoType = {
  email: string;
  password: string;
};
