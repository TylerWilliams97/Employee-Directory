//import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

function Employees() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  

  return(
    <div>
      {console.log(items)}
     
    </div>
  )
  };
  export default Employees;