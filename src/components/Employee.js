import { useState, useEffect } from "react";
import React from 'react';
import Table from 'react-bootstrap/Table'

function Employees() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Employees, setEmployees] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=15")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            setIsLoaded(true);
            setEmployees(result.results)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
            return(error)
          }
        )
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>    
          <div>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              {Employees.map(Employee => (
              <tbody>
                <tr>
                  <td>{Employee.name.first}</td>
                  <td>{Employee.name.last}</td>
                  <td>{Employee.email}</td>
                </tr>
              </tbody>
                ))}
            </Table>
          </div>
        </div>
      );
    }
  }
  export default Employees;