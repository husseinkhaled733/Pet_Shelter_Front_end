// PetCard.js
import Image from "next/image";
import Link from "next/link";
import React from "react";


const PetCard = ({ petData }: { petData: any }) => {
  const { petId, name, age, shelter } = petData;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image src={require("./cat.jpg")} alt="Cat" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Age: {age}</p>
        <p>Shelter: {shelter}</p>
        <div className="card-actions">
          <Link href={`/Pet/${petId}`}>
          <button className="btn btn-primary">Show More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
