import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./components/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
