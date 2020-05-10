import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUser = () => users.map((user) => <li key={user.username}>{user.username}</li>);
  return (
    <>
      <Link to="/">HOme</Link>
      <p>Users List: </p>
      <ul>{renderUser()}</ul>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func,
};
export default UsersList;
