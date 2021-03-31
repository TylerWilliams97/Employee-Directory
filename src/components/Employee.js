import { useState, useEffect } from "react";
import React from 'react';

function Employees() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Employees, setEmployees] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            setIsLoaded(true);
            setEmployees(result.results);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        {Employees.map(Employee => (
            
          <div>{Employee.name.first} {Employee.name.last} {Employee.email}</div>
          
        ))}
        </div>
      );
    }
  }
  export default Employees;