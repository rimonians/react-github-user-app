import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const useUser = () => {
  return useContext(UserContext);
};
export default useUser;
