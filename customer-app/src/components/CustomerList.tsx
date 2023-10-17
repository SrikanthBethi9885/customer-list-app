// src/components/CustomerList.js

import React, { useState, useEffect } from 'react';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/.netlify/functions/customer');
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
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer:any) => (
          <li key={customer.Id}>{customer.name}</li>
        ))}
      </ul>
      <h2>Driver List</h2>
    </div>
  );
};

export default CustomerList;

