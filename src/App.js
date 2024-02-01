import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Components/Header"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
