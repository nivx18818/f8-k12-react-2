import { Outlet } from "react-router-dom";

function NoHeaderLayout() {
  return (
    <div className="wrapper">
      <main id="main">
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Company Name</p>
      </footer>
    </div>
  );
}

export default NoHeaderLayout;
