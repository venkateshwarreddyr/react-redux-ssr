import { connect } from "react-redux";
import UsersList from "./UsersList";
import { fetchUsers } from "../../actions/userActions";

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers })(UsersList);
