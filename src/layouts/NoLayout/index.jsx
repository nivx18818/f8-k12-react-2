import { Outlet } from "react-router-dom";

function NoLayout() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default NoLayout;
