import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import actions from "../actionTypes/actions";

export const UsersContext = createContext();

const initialState = {
  loading: true,
  data: [],
  copyData: [],
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
        data: [],
        copyData: [],
        err: true,
      };
    default:
      return state;
  }
};

const UsersProvider = ({ children }) => {
  const [usersState, dispatch] = useReducer(reducer, initialState);

  //   Invoke when component did mount
  useEffect(() => {
    fetchData();
  }, []);

  //   Fetch data
  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API);
      dispatch({ type: actions.success, payload: res.data });
    } catch (err) {
      dispatch({ type: actions.error });
    }
  };

  return (
    <UsersContext.Provider value={{ usersState }}>
      {children}
    </UsersContext.Provider>
  );
};
export default UsersProvider;
