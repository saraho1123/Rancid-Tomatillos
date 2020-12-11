import React from 'react';
import './Error.css';

const Error = ({ error }) => {
  return(
    <h1 className="error-message">{error} <br/> Please refresh the page or try again later.</h1>
  )
} 

export default Error;