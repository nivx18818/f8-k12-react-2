import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import DefaultLayout from "@/layouts/DefaultLayout";
import routes from "@/routes";
import "@/App.css";
import NoLayout from "./layouts/NoLayout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, component, layout }) => {
          const Layout =
            layout === undefined ? DefaultLayout : layout || NoLayout;
          const Component = component;

          return (
            <Route key={path} element={<Layout />}>
              <Route path={path} element={<Component />} />
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
