import React from "react";

import PetCard from "./petCard";
async function getPets(searchCriteria: any) {
  const adopterEmail = localStorage.getItem("email");
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");
  headers.append("Authorization", localStorage.getItem("Authorization")!);
  const res = await fetch(`http://localhost:8080//adopter/search`, {
    method: "GET",
    headers: headers,
    cache: "no-store",
    body: JSON.stringify(searchCriteria),
  });
  const data = await res.json();
  console.log(data);
  return data;
}

const PetList = async ({
  searchCriteria,
}: {
  searchCriteria: SearchParams;
}) => {
  const petDataList = await getPets(searchCriteria);

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {petDataList.map((petData, index) => (
        <li key={index}>
          <PetCard petData={petData} />
        </li>
      ))}
    </ul>
  );
};

export default PetList;
