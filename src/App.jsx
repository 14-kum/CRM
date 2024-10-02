import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./component/pages/LoginPage";
import Header from "./component/common/Header";
import Navbar from "./component/common/Navbar";
import DashboardPage from "./component/pages/DashboardPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Header */}
      {location.pathname !== "/login" && <Header />}
      {location.pathname !== "/login" && <Navbar />}
      <div className={location.pathname !== "/login" ? "mt-10" : ""}>    
      {/* Login Page */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
      </div>
    </>
  );
}
