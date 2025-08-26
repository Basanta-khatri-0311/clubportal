import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home registrations={registrations} setRegistrations={setRegistrations} />}
        />
        <Route
          path="/admin-login"
          element={<AdminLogin setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard registrations={registrations} setRegistrations={setRegistrations} setIsAdmin={setIsAdmin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
