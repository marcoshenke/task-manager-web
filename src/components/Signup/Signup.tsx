import { MouseEvent } from "react";
import { SignUpType, UserInfoType } from "./signUp.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignUpSchemaType, signupSchema } from "./schema";

const Signup = ({ setCurrUser, setShow }: SignUpType) => {
  const signup = async (userInfo: UserInfoType) => {
    const url = "http://localhost:3001/signup";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      const token = response.headers.get("Authorization") || "";
      localStorage.setItem("token", token);
      setCurrUser({
        user: { email: data.email, password: data.password, name: data.name },
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignUpSchemaType) => {
    // const formData = new FormData(formRef.current);
    // const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    };
    signup(userInfo);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        Nome completo:{" "}
        <input type="name" placeholder="Nome completo" {...register("name")} />
        <br />
        Email: <input type="email" placeholder="email" {...register("email")} />
        <br />
        Password:{" "}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,{" "}
        <a href="#login" onClick={handleClick}>
          Login
        </a>{" "}
        here.
      </div>
    </div>
  );
};
export default Signup;
