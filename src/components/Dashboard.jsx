

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      const res = await axios.post(
        'https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search',
        {},
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setData(res.data.data);
      console.log(res.data.data)
 // do something with response data
    };
    fetchData();
  }, []);

  return(
    <div>
        <h1>
            Dashboard
        </h1>
        <ul>
            {data.map((user) => (
               <li key= {user.id}>
                <p>{user?.['Current Status']}</p>
                <p>{user?.['Receive Amount/受取金額']}</p>
                <p>{user?.['Receive Country/受取国']}</p>
                <p>{user?.['Receiver Full Name']}</p>
                <p>{user?.['Send Amount/送金額']}</p>
                <p>{user?.['Send Country/送金国']}</p>
                <p>{user?.['Sender Full Name']}</p>
                </li>
              
            ))}
        </ul>
    </div>
  );
};

export default Dashboard;
