"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === "ADMIN" && password === "1234") {
      router.push("/admin");
    } else if (login === "Anna" && password === "5678") {
      router.push("/teacher");
    } else {
      console.log("Неверные учетные данные");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-7 rounded-md">
        <Box noValidate autoComplete="off">
          <TextField
            id="outlined-basic-login"
            label="Login"
            value={login}
            variant="outlined"
            onChange={handleLoginChange}
            type="text"
          />
        </Box>
        <br />
        <Box noValidate autoComplete="off">
          <TextField
            id="outlined-basic-password"
            label="Password"
            value={password}
            variant="outlined"
            onChange={handlePasswordChange}
            type="password"
          />
        </Box>
        <br />
        <Button variant="contained" type="submit" className="bg-blue-500">
          Вход
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
