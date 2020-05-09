import React from "react";
import { Link } from "react-router-dom";
import UsersList from "../../components/UsersList";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <UsersList />
      <Link to="/login">Login</Link>
    </>
  );
};

export default HomePage;
