import React from "react";
import ApplicationCard from "./ApplicationCard";

async function getApplications() {
  const adopterEmail = localStorage.getItem("email");
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");
  headers.append("Authorization", localStorage.getItem("Authorization")!);
  const res = await fetch(
    `http://localhost:8080/adopter/viewApplications/${adopterEmail}`,
    {
      method: "GET",
      headers: headers,
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function ApplicationsList() {
  const applications = await getApplications();
  console.log(applications);

  return (
    <ul className="flex flex-wrap flex-col justify-center gap-4">
      {applications.map((application, index) => (
        <li key={index}>
          <ApplicationCard application={application} index={index} />
        </li>
      ))}
    </ul>
  );
}
