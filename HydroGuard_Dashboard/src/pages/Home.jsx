import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="home-card">

        <h1 className="title">
          HydroGuard
        </h1>

        <p className="subtitle">
          DETECT -  ALERT -  PROTECT
        </p>

        <button
          className="main-btn"
          onClick={() =>
            navigate("/admin-login")
          }
        >
          Admin Login
        </button>

        <button
          className="main-btn"
          onClick={() =>
            navigate("/employee-login")
          }
        >
          Employee Login
        </button>

        <p
          className="register-link"
          onClick={() =>
            navigate("/new-register")
          }
        >
          New User? Create Account
        </p>

      </div>

    </div>
  );
}

export default Home;