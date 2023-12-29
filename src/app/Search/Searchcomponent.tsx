"use client"
// components/SearchBar.js

import React, { useState } from "react";
import PetCard from "../Pet/petCard";


const SearchBar = ({handleSubmit,petDataList}: {handleSubmit: any, petDataList: []}) =>{




  const [species,setSpecies]=useState('');
  const [breed,setBreed]=useState('');
  const [age,setAge]=useState('');
  const [shelterLocation,setShelterLocation]=useState('');

  const searchCriteria:SearchParams={
    species: species,
    breed: breed,
    age: age,
    shelterLocation: shelterLocation,
    houseTrained: true,
    notHouseTrained: true,
    vaccinated: true,
    notVaccinated: true,
    spayed: true,
    neutering: true
  }

  
  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(searchCriteria);
        }}
        className="flex flex-col md:flex-row m-auto items-center w-fit justify-center space-y-4 md:space-y-0 mb-4 border-2 border-gray-400 px-6 pb-6 rounded-lg bg-base-100"
      >
        {/* Species Field */}
        <div className="flex flex-col mb-4 md:mb-0 p-2">
          <label htmlFor="species" className="mb-1 text-gray-400">
            Species
          </label>
          <input
            type="text"
            id="species"
            name="species"
            placeholder="Enter species"
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
            value={species}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Breed Field */}
        <div className="flex flex-col mb-4 md:mb-0 p-2">
          <label htmlFor="breed" className="mb-1 text-gray-400">
            Breed
          </label>
          <input
            type="text"
            id="breed"
            name="breed"
            placeholder="Enter breed"
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            value={breed}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Age Field */}
        <div className="flex flex-col mb-4 md:mb-0 p-2">
          <label htmlFor="age" className="mb-1 text-gray-400">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Enter age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Shelter Location Field */}
        <div className="flex flex-col mb-4 md:mb-0 p-2">
          <label htmlFor="shelterLocation" className="mb-1 text-gray-400">
            Shelter Location
          </label>
          <input
            type="text"
            id="shelterLocation"
            name="shelterLocation"
            placeholder="Enter shelter location"
            onChange={(e) => {
              setShelterLocation(e.target.value);
            }}
            value={shelterLocation}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Search Button */}
        <div className="flex flex-col mb-4 md:mb-0 pt-6 px-2">
          <button type="submit" className="btn btn-primary ">
            Search
          </button>
        </div>
      </form>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Suggestions
          </span>
        </h1>
      </div>
      <ul className="flex flex-wrap justify-center gap-4">
        {petDataList.map((petData, index) => (
          <li key={index}>
            <PetCard petData={petData} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
