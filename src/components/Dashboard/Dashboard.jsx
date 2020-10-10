import React from "react";
import { Consumer } from "../utils/constants";

import Greeting from "./Greeting/Greeting";
import Navbar from "./Navbar/Navbar";

const Dashboard = () => {
  return (
    <Consumer>
      {({ isDark }) => {
        return (
          <>
            <Navbar isDark={isDark} />
            <Greeting isDark={isDark} />
          </>
        );
      }}
    </Consumer>
  );
};

export default Dashboard;
