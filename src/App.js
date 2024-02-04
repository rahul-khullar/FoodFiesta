import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
      <Footer />

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
