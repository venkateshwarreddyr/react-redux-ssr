import React, { useEffect } from "react";
import PropTypes from "prop-types";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUser = () => users.map((user) => <li>{user.username}</li>);
  return (
    <>
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
