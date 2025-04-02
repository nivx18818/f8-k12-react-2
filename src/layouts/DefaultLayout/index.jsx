import { NavLink, Outlet } from "react-router-dom";
import config from "@/config";
import useUserContext from "@/hooks/useUserContext";

function DefaultLayout() {
  const { currentUser } = useUserContext();

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
        <h1>Hi, {currentUser?.username}</h1>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Company Name</p>
      </footer>
    </div>
  );
}

export default DefaultLayout;
