// src/components/CustomerList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers123:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <li>
        {customers.map((customer:any) => (
          <li key={customer.Id}>{customer.name}</li>
        ))}
      </li>
    </div>
  );
};

export default CustomerList;
