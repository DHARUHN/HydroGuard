import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import NewRegister from "./pages/NewRegister";
import Dashboard from "./pages/Dashboard";
import GrantAccess from "./pages/GrantAccess";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/employee-login"
          element={<EmployeeLogin />}
        />

        <Route
          path="/new-register"
          element={<NewRegister />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/grant-access"
          element={<GrantAccess />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;

/*
 <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/employee-login"
          element={<EmployeeLogin />}
        />

        <Route
          path="/new-register"
          element={<NewRegister />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
*/