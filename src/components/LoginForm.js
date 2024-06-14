// LoginForm.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../utilis/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password");
      return;
    }
    login({ username, password });
    navigate("/home");
  };

  return (
    <> 
    <div className="mb-10">       <div className="w-1/2 text-center mx-auto my-5 bg-orange-300 rounded-md p-3">
      <h2 className="font-bold text-2xl p-2 m-1">Login Form</h2>
      <form
        className=" flex flex-col font-semibold text-md p-2 m-3"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="border border-black p-2 m-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="border border-black p-2 m-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-black inline-block text-white p-3 border-black rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
    </div>

    </>

  );
};

export default LoginForm;
