import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const role =
    localStorage.getItem(
      "role"
    );

  const API_URL =
  "https://3z41hmylgj.execute-api.ap-southeast-2.amazonaws.com/prod/dashboard";

  const [data,
    setData] =
    useState(null);

  const [row,
    setRow] =
    useState(0);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const res =

            await fetch(

              `${API_URL}?row=${row}`

            );

          const result =

            await res.json();

          setData(
            result
          );

        }

        catch (err) {

          console.log(

            err

          );

        }

      };

    fetchData();

    const interval =

      setInterval(() => {

        setRow(

          prev =>

            prev + 1

        );

      }, 10000);

    return () =>

      clearInterval(

        interval

      );

  }, [row]);

  const logout = () => {

    localStorage.removeItem(

      "role"

    );

    navigate("/");

  };

  if (!data) {

    return (

      <h2>

        Loading Data...

      </h2>

    );

  }

  return (

    <div className="dashboard-container">

      <div className="topbar">
        <center>
        <div>

          <h1>

            HydroGuard

          </h1>

          <p>

            DETECT -  ALERT -  PROTECT

          </p>
          
        </div>
        </center>
        <div>

          {

            role === "admin"

            &&

            <button

              className="grant-btn"

              onClick={() =>

                navigate(

                  "/grant-access"

                )

              }

            >

              Grant Access

            </button>

          }

          <button

            className="logout-btn"

            onClick={logout}

          >

            Logout

          </button>

        </div>

      </div>

      {

        data.alarm === "ON"

        ?

        <div

          className="alarm-banner"

        >

          ⚠ Water Quality Alert

        </div>

        :

        <div

          className="safe-banner"

        >

          ✓ System Normal

        </div>

      }

      <div className="sensor-grid">

        <div className="sensor-card">

          <h3>

            pH

          </h3>

          <p>

            {data.pH}

          </p>

        </div>

        <div className="sensor-card">

          <h3>

            Temperature

          </h3>

          <p>

            {data.temperature}

            °C

          </p>

        </div>

        <div className="sensor-card">

          <h3>

            Colour

          </h3>

          <p>

            {data.colour}

          </p>

        </div>

        <div className="sensor-card">

          <h3>

            Turbidity

          </h3>

          <p>

            {data.turbidity}

          </p>

        </div>

      </div>

      <div className="status-grid">

        <div className="status-card">

          <h2>

            COD

          </h2>

          <p>

            {data.cod}

            mg/L

          </p>

        </div>

        <div className="status-card">

          <h2>

            Sensor Health

          </h2>

          <p>

            {data.sensor_health}

          </p>

        </div>

        <div className="status-card">

          <h2>

            Alarm

          </h2>

          <p>

            {data.alarm}

          </p>

        </div>

      </div>

      <div className="recommendation-card">

        <h2>

          Recommendation

        </h2>

        <p>

          {

            data.alarm === "ON"

            ?

            "Inspect Water Treatment Unit"

            :

            "Water Quality Stable"

          }

        </p>

      </div>

      <div className="footer-box">

        <p>

          Dataset Row :

          {row}

        </p>

        <p>

          Refresh Interval :

          10 sec

        </p>

      </div>

    </div>

  );

}
export default Dashboard;
/*


    // return (
    //     <div>
    //         <h2>HydroGuard Dashboard</h2>

    //         <p>pH: {data.pH}</p>
    //         <p>Temperature: {data.temperature}</p>
    //         <p>Colour: {data.colour}</p>
    //         <p>Turbidity: {data.turbidity}</p>
    //         <p>COD: {data.cod}</p>
    //         <p>Sensor Health: {data.sensor_health}</p>
    //         <p>Alarm: {data.alarm}</p>
    //     </div>
    // );
}

export default Dashboard;

// // import React, { useEffect, useState } from 'react';

// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// //   ResponsiveContainer
// // } from 'recharts';

// // function Dashboard() {

// //   const [sensorData, setSensorData] = useState({});
// //   const [graphData, setGraphData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const fetchData = () => {

// //     fetch(
// //       //'https://vnc0aj6tm8.execute-api.ap-southeast-2.amazonaws.com/prod/dashboard'
// //       'https://3z41hmylgj.execute-api.ap-southeast-2.amazonaws.com/prod/dashboard'
// //     )

// //     .then((res) => res.json())

// //     .then((data) => {

// //       setGraphData(data);

// //       setSensorData(
// //         data[data.length - 1]
// //       );

// //       setLoading(false);

// //     })

// //     .catch((err) => {

// //       console.log(err);

// //     });

// //   };


// //   useEffect(() => {

// //     fetchData();

// //     const interval = setInterval(() => {

// //       fetchData();

// //     },

// //     10000 // 10 seconds

// //     // 60000 // 1 minute

// //     );

// //     return () => clearInterval(interval);

// //   }, []);


// //   const waterStatus = () => {

// //     if (

// //       sensorData.ph >= 6.5 &&

// //       sensorData.ph <= 8.5 &&

// //       sensorData.temperature <= 40 &&

// //       sensorData.tds <= 2100 &&

// //       sensorData.turbidity <= 50 &&

// //       sensorData.colour <= 150

// //     )

// //     {

// //       return "SAFE";

// //     }

// //     return "WARNING";

// //   };


// //   if (loading) {

// //     return (

// //       <h2>

// //         Loading Data...

// //       </h2>

// //     )

// //   }


// //   return (

// //     <div className="dashboard">

// //       <h1>

// //         HydroGuard Dashboard

// //       </h1>


// //       <div className="cards">

// //         <div className="card">

// //           <h3>pH</h3>

// //           <p>{sensorData.ph}</p>

// //         </div>


// //         <div className="card">

// //           <h3>Temperature</h3>

// //           <p>

// //             {sensorData.temperature} °C

// //           </p>

// //         </div>


// //         <div className="card">

// //           <h3>TDS</h3>

// //           <p>

// //             {sensorData.tds} mg/L

// //           </p>

// //         </div>


// //         <div className="card">

// //           <h3>Flow</h3>

// //           <p>

// //             {sensorData.flow}

// //           </p>

// //         </div>


// //         <div className="card">

// //           <h3>Colour</h3>

// //           <p>

// //             {sensorData.colour}

// //           </p>

// //         </div>


// //         <div className="card">

// //           <h3>Turbidity</h3>

// //           <p>

// //             {sensorData.turbidity}

// //           </p>

// //         </div>

// //       </div>


// //       <div className="status">

// //         <h2>

// //           Water Status :

// //           {waterStatus()}

// //         </h2>

// //       </div>


// //       <div className="status">

// //         <h2>

// //           Sensor Health :

// //           Healthy

// //         </h2>

// //       </div>


// //       <div className="timestamp">

// //         <h3>

// //           Timestamp

// //         </h3>

// //         <p>

// //           {sensorData.timestamp}

// //         </p>

// //       </div>


// //       <div className="graph">

// //         <ResponsiveContainer

// //           width="100%"

// //           height={400}

// //         >

// //           <LineChart

// //             data={graphData}

// //           >

// //             <CartesianGrid

// //               strokeDasharray="3 3"

// //             />

// //             <XAxis

// //               dataKey="ID"

// //             />

// //             <YAxis />

// //             <Tooltip />

// //             <Line

// //               type="monotone"

// //               dataKey="ph"

// //               stroke="#2196f3"

// //             />

// //             <Line

// //               type="monotone"

// //               dataKey="temperature"

// //               stroke="#4caf50"

// //             />

// //             <Line

// //               type="monotone"

// //               dataKey="tds"

// //               stroke="#ff5722"

// //             />

// //             <Line

// //               type="monotone"

// //               dataKey="flow"

// //               stroke="#9c27b0"

// //             />

// //             <Line

// //               type="monotone"

// //               dataKey="colour"

// //               stroke="#ffc107"

// //             />

// //             <Line

// //               type="monotone"

// //               dataKey="turbidity"

// //               stroke="#f44336"

// //             />

// //           </LineChart>

// //         </ResponsiveContainer>

// //       </div>

// //     </div>

// //   );

// // }

// // export default Dashboard;


*/