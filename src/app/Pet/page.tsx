// components/PetProfile.js

'use client'
import React from "react";
import Image from "next/image";
import {
  dummyPetData,
  dummyPetData1,
  dummyPetData2,
  dummyPetData3,
} from "../Home/dummyPetData";
import Headercomponent from "@/app/Header/Headercomponent";

async function submitApplication(petID:any) {
  const adopterEmail = localStorage.getItem('email')
  let headers = new Headers()
  headers.append('Content-Type', 'application/json');
  headers.append('mode', 'cors')
  headers.append('Authorization', localStorage.getItem('Authorization')!)
  const dto={
    AdopterEmail:adopterEmail,
    petId:petID
  }
  const res=await fetch(`http://localhost:8080/adopter/application`,{
      method:'POST',
      headers:headers,
      cache:'no-store',
      body:JSON.stringify(dto)
  })
  const data=await res.json()
  console.log(data)
  return data
}

const PetProfile = ({ searchParams }: any) => {
  console.log(searchParams);
  const petDataList = [
    dummyPetData,
    dummyPetData1,
    dummyPetData2,
    dummyPetData3,
  ];

  const pet = searchParams;

  async function handleAdopt(petID:any){
    console.log(petID);
    
    const response=await submitApplication(petID)
    console.log(response)
    console.log("handling Adopt");
    
  } 

  return (
    <>
    <Headercomponent></Headercomponent>
      <div className="container mx-auto p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            {/* Display images */}
            <div className="mb-4 flex justify-center">
              <Image
                src={require("./cat.jpg")}
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
              <h2 className="text-2xl text-zinc-50 font-bold mb-4">{pet.name}</h2>
              <div className="w-full sm:w-1/2 inline-block">
                <p className="text-neutral-950 text-lg font-semibold">
                  Date of Birth: {pet.dateOfBirth}
                </p>
                <p className="text-neutral-950 text-lg font-semibold">Gender: {pet.gender}</p>
                <p className="text-neutral-950 text-lg font-semibold">
                  Health Status: {pet.healthStatus}
                </p>
              </div>
              <div className="w-full sm:w-1/2 inline-block">
                <p className="text-neutral-950 text-lg font-semibold">Species: {pet.species}</p>
                <p className="text-neutral-950 text-lg font-semibold">Breed: {pet.breed}</p>
                <p className="text-neutral-950 text-lg font-semibold">Behaviour: {pet.behaviour}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 mx-auto text-center">
              <h3 className="text-xl font-bold text-zinc-50 mb-2">Description</h3>
              <p className="text-neutral-950 text-lg font-semibold">{pet.description}</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            {/* Availability Status */}
            <div className="mb-4 mx-auto text-center">
              <h3 className="text-xl font-bold mb-2 text-zinc-50">Availability Status</h3>
              <p className="text-2xl text-neutral-950 font-semibold">
                {pet.availableStatus}
              </p>
            </div>
            <div className="flex justify-around">
                <button className="btn btn-primary w-1/5" onClick={()=>{
                  handleAdopt(pet.petId)
                }}>Adopt</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetProfile;
