import { Routes, Route } from "react-router-dom"
import LoginPage from "./component/pages/LoginPage"
import Header from "./component/common/Header"
import Navbar from "./component/common/Navbar"

export default function App() {
  return (
    <>
    <Header />
    <Navbar />
      <Routes>
         <Route to="" element={<LoginPage />} />
      </Routes>
    </>
  )
}