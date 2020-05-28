import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = () => async (dispatch) => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: FETCH_USERS,
    payload: users,
  });
};
