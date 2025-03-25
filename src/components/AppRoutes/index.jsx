import { Route, Routes } from "react-router-dom";

import routes from "@/routes";
import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";


function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout =
          route.layout === undefined ? DefaultLayout : route.layout || NoLayout;
        const Component = route.component;

        return (
          <Route key={route.path} element={<Layout />}>
            <Route path={route.path} element={<Component />} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
