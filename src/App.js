import React from "react";
import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersProvider from "./contexts/usersContext";
import UserProvider from "./contexts/userContext";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import View from "./pages/View/View";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <UsersProvider>
        <UserProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:username" element={<View />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </UserProvider>
      </UsersProvider>
    </BrowserRouter>
  );
};
export default App;
