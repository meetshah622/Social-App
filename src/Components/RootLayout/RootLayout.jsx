import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { renderRoutes } from "../../Config/routers";

const generateRoutes = () => {
  const router = renderRoutes.map(([key, route]) => (
    <Route key={key} path={route?.path} element={<route.component />} />
  ));
  return <>{router}</>;
};
export const routers = createBrowserRouter(
  createRoutesFromElements(generateRoutes())
);
function RootLayout() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default RootLayout;
