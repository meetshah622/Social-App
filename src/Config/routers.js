import { lazy } from "react";

export const routesList = {
  home: {
    path: "/",
    pathname: "/",
    component: lazy(() => import("../Components/Home/Dashboard")),
  },
  createAccount: {
    path: "/create-account",
    pathname: "/create-account",
    component: lazy(() => import("../Components/SignUp/SignUp.jsx")),
  },
  login: {
    path: "/login",
    pathname: "/login",
    component: lazy(() => import("../Components/Login/Login.jsx")),
  },
  friendsList: {
    path: "/friends-list",
    pathname: "/friends-list",
    component: lazy(() => import("../Components/FriendsListWrapper/FriendsListWrapper.jsx")),
  },
};
export const renderRoutes = Object.entries(routesList);
