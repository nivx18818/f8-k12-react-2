import { NavLink, Outlet } from "react-router-dom";
import config from "@/config";

function DefaultLayout() {
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
      <footer>
        <p>&copy; {new Date().getFullYear()} Company Name</p>
      </footer>
    </div>
  );
}

export default DefaultLayout;
