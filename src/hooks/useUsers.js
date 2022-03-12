import React, { useContext } from "react";
import { UsersContext } from "../contexts/usersContext";

const useUsers = () => {
  return useContext(UsersContext);
};
export default useUsers;
