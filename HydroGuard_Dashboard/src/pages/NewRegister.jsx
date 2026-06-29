import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRegister() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const registerUser = () => {

  if (
    password !== confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  users.push({
    name,
    email,
    password
  });

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  alert(
    "Registration Successful"
  );

  navigate("/");
};

  return (
    <div className="register-page">

      <div className="register-card">

        <h2>
          Create New Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

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

        <input
          type="password"
          placeholder="Retype Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <button
          className="main-btn"
          onClick={registerUser}
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default NewRegister;