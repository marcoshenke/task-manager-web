import { Dispatch, SetStateAction } from "react"

export type LoginType = {
  setCurrUser: Dispatch<SetStateAction<null>>
  setShow: Dispatch<SetStateAction<boolean>>
}

