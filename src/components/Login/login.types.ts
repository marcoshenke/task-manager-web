import { Dispatch, SetStateAction } from "react"

import { UserInfoType } from "types/user.types";


export type LoginType = {
  setCurrUser: Dispatch<SetStateAction<UserInfoType | null>>
  setShow: Dispatch<SetStateAction<boolean>>
}

