import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = () => {

    if (

      email === "admin@gmail.com"

      &&

      password === "admin@123"

    ) {

      localStorage.setItem(

        "role",

        "admin"

      );

      navigate(

        "/dashboard"

      );

    }

    else {

      alert(

        "Invalid Admin Credentials"

      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h2>

          Admin Login

        </h2>

        <input

          type="email"

          placeholder="Email ID"

          value={email}

          onChange={(e) =>

            setEmail(

              e.target.value

            )

          }

        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>

            setPassword(

              e.target.value

            )

          }

        />

        <button

          className="main-btn"

          onClick={login}

        >

          Login

        </button>

      </div>

    </div>

  );

}

export default AdminLogin;