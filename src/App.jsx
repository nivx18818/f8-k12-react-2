import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { UserProvider } from "./contexts/UserContext";

import AppRoutes from "./components/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import store, { persistor } from "./store";
import "./App.css";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop />
          <UserProvider />
          <AppRoutes />
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
