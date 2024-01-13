import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContex";
import LoginPage from "./components/Login";
import DashboardPage from "./components/DashboardPage";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
