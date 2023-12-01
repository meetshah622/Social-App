import { lazy } from "react";

export const routesList = {
  home: {
    path: "/",
    pathname: "/",
    component: lazy(() => import("../Components/Home/Dashboard")),
  },
  login: {
    path: "/login",
    pathname: "/login",
    component: lazy(() => import("../Components/Login/Login.jsx")),
  },
  createAccount: {
    path: "/create-account",
    pathname: "/create-account",
    component: lazy(() => import("../Components/CreateAccount/CreateAccount.jsx")),
  },
};
export const renderRoutes = Object.entries(routesList);
