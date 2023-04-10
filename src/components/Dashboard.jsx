import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const jwtToken = localStorage.getItem("jwtToken");
      const res = await axios.post(
        "https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search",
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setData(res?.data?.data);
      console.log(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <table>
        <thead>
          <tr>
            <th>Sender Full Name</th>
            <th>Send Country</th>
            <th>Send Amount</th>
            <th>Receiver Full Name</th>
            <th>Receiver Country</th>
            <th>Receiver Amount</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((user) => (
              <tr key={user.id}>
                <td>{user?.["Sender Full Name"]}</td>
                <td>{user?.["Send Country/送金国"]}</td>
                <td>{user?.["Send Amount/送金額"]}</td>
                <td>{user?.["Receiver Full Name"]}</td>
                <td>{user?.["Receive Country/受取国"]}</td>
                <td>{user?.["Receive Amount/受取金額"]}</td>
                <td>{user?.["Current Status"]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
