import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = () => {

    const approvedUsers =

      JSON.parse(

        localStorage.getItem(

          "approvedUsers"

        )

      ) || [];

    const foundUser =

      approvedUsers.find(

        (user) =>

          user.email === email &&

          user.password === password

      );

    if (foundUser) {

      localStorage.setItem(

        "role",

        "employee"

      );

      navigate(

        "/dashboard"

      );

    }

    else {

      alert(

        "Access Not Granted By Admin"

      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h2>

          Employee Login

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

export default EmployeeLogin;



/*import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = () => {

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const foundUser =
    users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

  if (foundUser) {

    navigate("/dashboard");

  } else {

    alert("Invalid Credentials");
  }
};

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Employee Login</h2>

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

export default EmployeeLogin;*/