import { NavLink, Outlet } from "react-router-dom";
import config from "@/config";

function NoFooterLayout() {
  return (
    <div className="wrapper">
      <header id="header">
        <div>Logo</div>
        <nav>
          <ul>
            <li>
              <NavLink to={config.routes.home}>Home</NavLink>
            </li>
            <li>
              <NavLink to={config.routes.products}>Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}

export default NoFooterLayout;
