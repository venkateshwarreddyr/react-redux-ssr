import { FETCH_USERS } from "../actions/userActions";

export default (state = [], action) => {
  console.log({ action });
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
