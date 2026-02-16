import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


function ProtectedRoute({children}) {
  const isAuth = localStorage.getItem("isAuth");
  // return isAuth === "true" ? children : <Navigate to="/login" />;//ternary operation
  if (isAuth === "true") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position= "top-right" autoClose={3000}/>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute> 
              <Dashboard />
            </ProtectedRoute>
          }
        />
{/* children inside the parent component */}
       <Route path="/" element= {<Navigate to = "login"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
