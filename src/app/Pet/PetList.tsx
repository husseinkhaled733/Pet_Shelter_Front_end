import React from "react";

import PetCard from "./petCard";
import { Console } from "console";
async function getPets(searchCriteria: any) {
  const adopterEmail = localStorage.getItem("email");
  console.log(adopterEmail);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("mode", "cors");
  headers.append("Authorization", localStorage.getItem("Authorization")!);
  const res = await fetch(`http://localhost:8080/adopter/search`, {
    method: "POST",
    headers: headers,
    cache: "no-store",
    body: JSON.stringify(searchCriteria),
  });
  const data = await res.json();
  console.log("retrieved");
  console.log(data);
  return data;
}

const PetList = async ({
  searchCriteria,
}: {
  searchCriteria: SearchParams;
}) => {


    console.log(searchCriteria);
    
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
