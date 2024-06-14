import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <h3>{error.statusText}</h3>
    </div>
  );
};

export default Error;
