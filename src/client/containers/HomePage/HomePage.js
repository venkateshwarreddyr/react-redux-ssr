import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>
      <Link to="/users">users</Link>
    </>
  );
};

export default HomePage;
