import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => console.log("Hi there")}>Click Me</button>
      <Link to="/login">Login</Link>
    </>
  );
};

export default HomePage;
