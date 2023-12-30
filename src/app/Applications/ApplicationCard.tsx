import React from "react";

const ApplicationCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Application ID</h2>
        <p>Status</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
