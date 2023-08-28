import React, { useState } from "react";

export const useFormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeInput = (setState) => (e) => {
    setState(e.target.value);
  };
  return {
    email,
    password,
    handleChangeInput,
    setEmail,
    setPassword,
  };
};
