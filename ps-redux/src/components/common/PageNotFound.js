import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <h1>Oops! page not found</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default PageNotFound;
