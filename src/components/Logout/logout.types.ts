import { Dispatch, SetStateAction } from "react"

import {UserInfoType} from 'types/user.types'


export type LogoutType = {
  setCurrUser: Dispatch<SetStateAction<UserInfoType | null>>
}
