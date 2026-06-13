// import React from 'react';
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Main_layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main_layout;
