import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./components/AppRoutes";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;
