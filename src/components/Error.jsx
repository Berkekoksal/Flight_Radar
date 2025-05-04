import React from "react";

const Error = ({ info }) => {
  return (
    <div className="error">
      <h2>Bir Sorun Oluştu!!</h2>
      <p>{info}</p>
    </div>
  );
};

export default Error;