import config from "@/config";
import { getCurrentUser } from "@/features/auth/authSlice";
import authService from "@/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

function DefaultLayout() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(getCurrentUser());
  };

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
        {currentUser && <h1>Hi, {currentUser?.username}</h1>}
        {currentUser && <button onClick={handleLogout}>Logout</button>}
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Company Name</p>
      </footer>
    </div>
  );
}

export default DefaultLayout;
