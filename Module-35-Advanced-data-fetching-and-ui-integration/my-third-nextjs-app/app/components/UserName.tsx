"use client";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserName = () => {
  const user = useContext(UserContext); 

  return <p className="text-xl font-bold text-green-500 text-center">
    Hello, {user.name}, your name is coming from UserContext </p>;  //📌 here the useContex is used directly 
};

export default UserName;