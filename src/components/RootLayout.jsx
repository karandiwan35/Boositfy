import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
 
      <Outlet />
    </div>
  );
};

export default RootLayout;
