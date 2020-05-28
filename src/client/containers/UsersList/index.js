import { connect } from "react-redux";
import UsersList from "./UsersList";
import { fetchUsers } from "../../actions/userActions";

const mapStateToProps = (state) => ({
  users: state.users,
});
export const loadData = (store) => {
  return store.dispatch(fetchUsers());
};
export default connect(mapStateToProps, { fetchUsers })(UsersList);
