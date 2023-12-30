import React from "react";

const ApplicationCard = ({application , index}:{application:any,index:any}) => {
    const{petName,status}=application
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Application number: {index}</h2>
        <p>Pet name: {petName}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default ApplicationCard;
