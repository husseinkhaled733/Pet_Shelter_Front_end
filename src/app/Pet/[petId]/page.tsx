// components/PetProfile.js

import React from "react";
import Image from "next/image";
import {
  dummyPetData,
  dummyPetData1,
  dummyPetData2,
  dummyPetData3,
}
  from "../../Home/dummyPetData";

const PetProfile = ({ params }: any) => {
  const petDataList = [
    dummyPetData,
    dummyPetData1,
    dummyPetData2,
    dummyPetData3,
  ];

  const pet = petDataList[params.petId - 1];

  return (
    <div className="container mx-auto mt-8 p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {/* Display images */}
          <div className="mb-4 flex justify-center">
            <Image
              src={require("../../cat.jpg")}
              alt={pet.name}
              className="w-1/3 h-1/3 rounded-lg shadow-md"
            />
            {/* {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))} */}
          </div>
          {/* Basic information */}
          <div className="mb-4 mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{pet.name}</h2>
            <div className="w-full sm:w-1/2 inline-block">
              <p className="text-gray-600">Date of Birth: {pet.dateOfBirth}</p>
              <p className="text-gray-600">Gender: {pet.gender}</p>
              <p className="text-gray-600">Health Status: {pet.healthStatus}</p>
            </div>
            <div className="w-full sm:w-1/2 inline-block">
              <p className="text-gray-600">Species: {pet.species}</p>
              <p className="text-gray-600">Breed: {pet.breed}</p>
              <p className="text-gray-600">Behaviour: {pet.behaviour}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4 mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Description</h3>
            <p className="text-gray-700">{pet.description}</p>
          </div>
        </div>

        {/* Relevant Documents and Availability */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {/* Relevant Documents */}
          <div className="mb-4 mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Relevant Documents</h3>
            <ul className="list-disc list-inside">
              {pet.relevantDocuments.map((doc, index) => (
                <li key={index} className="text-gray-700">
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability Status */}
          <div className="mb-4 mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Availability Status</h3>
            <p className="text-2xl text-green-500 font-semibold">
              {pet.availableStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
