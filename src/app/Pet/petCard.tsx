// PetCard.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PetCard = ({ petData }: { petData: any }) => {
  const {
    petID,
    name,
    gender,
    healthStatus,
    dateOfBirth,
    species,
    breed,
    behavior,
    description,
    available,
  } = petData;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image src={require("./cat.jpg")} alt="Cat" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Date of Birth: {dateOfBirth}</p>
        <p>Description: {description}</p>
        <div className="card-actions">
          <Link
            href={{
              pathname: "/Pet",
              query: {
                petId: petID,
                name: name,
                gender:gender,
                healthStatus:healthStatus,
                dateOfBirth:dateOfBirth,
                species:species,
                breed:breed,
                behavior:behavior,
                description:description,
                available:available,
              },
            }}
          >
            <button className="btn btn-primary">Show More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
