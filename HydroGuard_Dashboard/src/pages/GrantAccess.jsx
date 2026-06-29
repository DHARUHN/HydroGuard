import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GrantAccess() {

  const navigate = useNavigate();

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const [approvedUsers,
    setApprovedUsers] =
    useState(

      JSON.parse(

        localStorage.getItem(
          "approvedUsers"
        )

      ) || []

    );

  const approveUser = (user) => {

    const exists =
      approvedUsers.find(

        (u) =>
          u.email === user.email

      );

    if (exists) {

      alert(
        "User Already Approved"
      );

      return;

    }

    const updatedUsers = [

      ...approvedUsers,

      user

    ];

    setApprovedUsers(
      updatedUsers
    );

    localStorage.setItem(

      "approvedUsers",

      JSON.stringify(
        updatedUsers
      )

    );

    alert(
      "Access Granted Successfully"
    );

  };

  return (

    <div className="grant-page">

      <div className="grant-header">

        <h1>
          Grant Access
        </h1>

        <button

          className="main-btn"

          onClick={() =>
            navigate(
              "/dashboard"
            )
          }

        >

          Dashboard

        </button>

      </div>

      <div className="grant-grid">

        {

          users.map(

            (user, index) => (

              <div

                key={index}

                className="grant-card"

              >

                <h3>

                  {user.name}

                </h3>

                <p>

                  {user.email}

                </p>

                <button

                  className="approve-btn"

                  onClick={() =>

                    approveUser(

                      user

                    )

                  }

                >

                  Approve

                </button>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}

export default GrantAccess;