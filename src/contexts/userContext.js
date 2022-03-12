import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import actions from "../actionTypes/actions";

export const UserContext = createContext();

const initialState = {
  loading: true,
  data: null,
  copyData: null,
  err: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.success:
      return {
        ...state,
        loading: false,
        data: payload,
        copyData: payload,
        err: false,
      };
    case actions.error:
      return {
        ...state,
        loading: false,
        data: null,
        copyData: null,
        err: true,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(reducer, initialState);

  //   Fetch data
  const fetchData = async (value) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/${value}`, {
        headers: { Authorization: `token ${process.env.REACT_APP_TOKEN}` },
      });
      dispatch({ type: actions.success, payload: res.data });
    } catch (err) {
      dispatch({ type: actions.error });
    }
  };

  return (
    <UserContext.Provider value={{ userState, fetchData }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
