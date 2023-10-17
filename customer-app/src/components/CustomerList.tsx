// src/components/CustomerList.js

import React, { useState, useEffect } from 'react';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:8888/.netlify/functions/customer');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error:any) {
        console.error('Error fetching customers:', error.message);
      }
    };

    fetchCustomers();
  }, []);

  return (
      <div style={{ textAlign: 'center' }}>
          <h2>Customer List</h2>
          <table border={1} style={{ margin: 'auto' }}>
              <thead>
                  <tr>
                      <th>Customer ID</th>
                      <th>Name</th>
                      <th>Address</th>
                  </tr>
              </thead>
              <tbody>
                  {customers.map((customer: any) => (
                      <tr key={customer.Id}>
                          <td>{customer.Id}</td>
                          <td>{customer.name}</td>
                          <td>{customer.address}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>

  );
};

export default CustomerList;

