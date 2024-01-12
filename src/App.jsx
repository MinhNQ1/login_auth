import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import AuthComponent from "./components/AuthComponent";
import UserInfo from "./components/UserInformations"
import { Routes, Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");

  console.log("accessToken", accessToken);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/home"
          element={
            <ProtectedRoute>
              <UserInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
