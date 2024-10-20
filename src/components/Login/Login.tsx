import { Dispatch, MouseEvent, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { LoginType } from "./login.types";
import { UserInfoType } from "types/user.types";

import { LoginSchemaType, LoginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = ({ setCurrUser, setShow }: LoginType) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const login = async (
    userInfo: UserInfoType,
    setCurrUser: Dispatch<SetStateAction<UserInfoType | null>>
  ) => {
    const url = "http://localhost:3001/login";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response_json = await response.json();
      if (!response.ok) throw response_json.error;
      const bearer_token = response.headers.get("Authorization") || "";
      const token = bearer_token.split(" ")[1];
      localStorage.setItem("token", token);
      console.log(response_json);
      setCurrUser(response_json?.status?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onSubmit = (data: LoginSchemaType) => {
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo, setCurrUser);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        Email: <input type="email" {...register("email")} placeholder="email" />
        <br />
        Password:{" "}
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered yet,{" "}
        <a href="#signup" onClick={handleClick}>
          Signup
        </a>{" "}
      </div>
    </div>
  );
};

export default Login;
