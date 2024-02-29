import React, { useState } from "react";
import * as RestApi from "@api/api.ts";

const useAuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const apiParams = {
      email,
      password,
    };

    RestApi.post("/user/login", apiParams)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleClickLogin,
  };
};

export default useAuthLogin;
