import About from "../components/about";
import Home from "../components/home";
import Users from "../components/users";
import UsersDetails from "../components/users/details";
import { AppRoutesProps } from "../types/routes";

export const allRoutes: AppRoutesProps[] = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/users",
    subRoutes: [
      {
        exact: true,
        component: Users,
      },
      {
        path: ":id",
        component: UsersDetails,
      },
    ],
  },
];
