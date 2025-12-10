import React from "react";
import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  password: string;
}

interface LoginProps {
  setisLogged: (value: boolean) => void;
  isLogged: boolean;
}

function Login({ setisLogged, isLogged }: LoginProps) {
  const [data, setdata] = useState<User[]>([]);
  const [inpName, setinpName] = useState("");
  const [inpPass, setinpPass] = useState("");
  const [loginId, setloginId] = useState("");
  useEffect(() => {
    axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/users").then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);

  return (
    <div className="login">
      <h2 className="loginAdmin">Log in</h2>
      <form action="">
        <input
          className="input"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setinpName(e.target.value);
          }}
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setinpPass(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            data.map((elem) => {
              if (
                elem.name == inpName &&
                elem.password == inpPass &&
                elem.id == 1
              ) {
                localStorage.setItem("loginId", String(elem.id));
                setisLogged(true);
              } else {
                console.log("incorrect");
              }
            });
            console.log(inpName, inpPass);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
