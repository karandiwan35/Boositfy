import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Stats from "./components/Stats";
import { Outlet, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React, { useRef } from "react";

function App() {



  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
