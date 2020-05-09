import HomePage from "../containers/HomePage/HomePage";
import LoginPage from "../containers/LoginPage/LoginPage";
import UsersList, { loadData } from "../containers/UsersList";

const Routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    loadData,
    path: "/users",
    component: UsersList,
  },
];

export default Routes;
